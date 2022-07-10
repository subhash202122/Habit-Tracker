const mongoose = require('mongoose');
//schema and model of Habit in MongoDb
var habitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    succeson: [{
        type: String
    }],
    failon: [{
        type: String
    }],
    streak: {
        type: Number
    },
    freq: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Habit = mongoose.model('Habit', habitSchema);
module.exports = Habit;