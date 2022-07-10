const Habit = require('../models/habit');

module.exports.index = function (req, res) {
//module finds all the habits and renders them to the habits view
    Habit.find({}, function (err, habits) {
        if (err) {
            console.log('error fetching habits ', err);
            return res.render('error');
        }
        return res.render('index', {
            habits: habits
        });
    });
}