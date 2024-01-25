const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,   
        required: true,
        unique: true
    },
    batch: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Students", Student);