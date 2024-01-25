const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const router = express.Router();
const StudentSchema = require("../models/studentProfile");
const MentorProgram  = require("../models/MentorProgram");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/add-profile', async(req, res) => {
    try {
        const {name, email, batch, branch, password} = req.body;

        const checkEmail = await StudentSchema.findOne({email});
        if(checkEmail){
            return res.status(201).json({"Message" : "Student Email already Exists"});
        }
        const hashPass = await bcrypt.hash(password, 10);
        const profile = new StudentSchema({
            name, email, batch, branch, password: hashPass
        });
    
        await profile.save();
        return res.json({"Message" : "Student Profile added succesfully", profile});
    
    } catch (err) {
        return res.status(400).json({"Error" : err.message});
    }
  
});


router.post("/login-profile", async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkEmail = await StudentSchema.findOne({ email });
      if (!checkEmail) return res.status(404).json({ Message: "User not found" });
      const passwordMatch = await bcrypt.compare(password, checkEmail.password);
      if (!passwordMatch)
        return res.status(401).json({ Message: "Invalid Credentials" });
      let options = {
        maxAge: 20 * 60 * 1000, // would expire in 20minutes
        httpOnly: true,
        secure: true,
        sameSite: "None",
      };
      const token = checkEmail.generateAccessJWT();
      res.cookie("SessionID", token, options);
      res.status(200).json({
        message: "You have successfully logged in."
      });
    } catch (err) {
      return res.status(400).json({ Error: err.message });
    }
  });
  



router.get('/get-all-profiles', async(req, res) => {
    try {
        const profiles = await StudentSchema.find();
        return res.json({"Message" : profiles});
    } catch(err){
        return res.json({"Error" : err});
    }
});

router.get('/get-by-year', async(req, res) => {
    try {
        const getProfiles = await StudentSchema.find();
        var uniqueYear = new Set();
        for(var i=0;i<getProfiles.length;i++){
            uniqueYear.add(getProfiles[i].batch);
        }
        const yearArray = Array.from(uniqueYear);
        console.log(yearArray);

        var getNewProfiles;
        const newArr = []; 

        for(var i=0; i<yearArray.length;i++){
            getNewProfiles = await StudentSchema.find({batch: yearArray[i]});
            newArr.push([yearArray[i], getNewProfiles]);
            console.log(yearArray[i]);
            console.log(getNewProfiles);
        }             
        return res.json({"Message": newArr});
    } catch(err){
        return res.json({"Error" : err});
    }
})

router.post('/add-program', async (req, res) => {
    try {
        const {mentor_name, program_name, imgUrl} = req.body;

    const program = new MentorProgram({
        mentor_name, program_name, imgUrl
    })

    await program.save();

    return res.json({"Message": "Program added successfully", program});
    } catch (err) {
        console.log(err);
        return res.json({"Message" : err});
    }
    
})

router.get('/get-all-programs', async function (req, res) {
    try {
        const programs = await MentorProgram.find();
        return res.json({"Message" : programs});
    } catch (err){
        console.log(err);
        return res.json({"Message" : err});
    }
})

module.exports = router;