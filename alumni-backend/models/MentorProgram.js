const mongoose = require('mongoose');

const MentorProg = new mongoose.Schema({
    mentor_name: {
        type: String,
        required: true
    },
    program_name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("MentorPrograms", MentorProg);