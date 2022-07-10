const Habit = require('../models/habit');
//function to create a new habit in database
module.exports.createhabit = async function (req, res) {
    console.log(req.body);
    
    try {
        let newhabit = await Habit.create(req.body);
        res.status(200).send({
            status: 'success',
            data: newhabit
        });
    }
    catch (err) {
        console.log(err);
        return res.status(200).send({ "status": "error", message: "Cannot create Habit" });
    }
}

//function to delete a habit from database
module.exports.deletehabit = async function(req,res){
    try{
        let deletehabit = await Habit.findOneAndDelete(req.body.id);
        return res.send(200,{status:'success'});

    }catch(err){
        return res.send(200 , {status:'error'});
    }
}