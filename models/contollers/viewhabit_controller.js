const Habit = require('../models/habit');
//view habit contrller to render habit view with all habits 
module.exports = async function (req, res) {
    var habit_id = req.query.id;
    console.log(habit_id);

    try {
        let habit = await Habit.findById(habit_id);
        return res.render('habit', {
            habit: habit
        });
    }
    catch (err) {
        if (err) {
            return res.render('error');
        }
    }
}
//module to toggle the state of the days 
module.exports.togglestate = async function (req, res) {
    console.log(req.body);

    try {
        let habit = await Habit.findById(req.body.habit_id);
        if (habit.succeson.includes(req.body.date)) {
            habit.succeson.pull(req.body.date);
            habit.failon.push(req.body.date);
            habit.save();
            res.send(200, { status: 'success', state: 'notdone' });
        }
        else if (habit.failon.includes(req.body.date)) {
            habit.failon.pull(req.body.date);
            habit.save();
            res.send(200, { status: 'success', state: 'neutral' });
        }
        else {
            habit.succeson.push(req.body.date);
            habit.save();
            res.send(200, { status: 'success', state: 'done' });
        }
    } catch (err) {
        console.log(err);

        return res.send(200, { status: 'error' });
    }
};