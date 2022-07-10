//importin various modules
const express = require('express');
const port = process.env.PORT || 8000;
const path = require('path');
const app = express();
const db = require('./config/mongoose');


app.locals.getStaticDay = function(num){
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    var date = new Date();
    let last = new Date(date.getTime() - (num * 24 * 60 * 60 * 1000));
    return days[last.getDay()];
}
app.locals.getStaticDate = function(num){
    var date = new Date();
    let last = new Date(date.getTime() - (num * 24 * 60 * 60 * 1000));
    return last.getDate();
}
app.locals.getDate = function(x){
    let date = new Date();
    let last = new Date(date.getTime() - (x * 24 * 60 * 60 * 1000));
    let month = last.getMonth()+1;
    let year =  last.getFullYear();
    let num_date = last.getDate();
    return num_date+"-"+month+"-"+year;
}
app.locals.success = function(x,sdates){
    let date = new Date();
    let last = new Date(date.getTime() - (x * 24 * 60 * 60 * 1000));
    let month = last.getMonth()+1;
    let year =  last.getFullYear();
    let num_date = last.getDate();    
    if(sdates.includes(num_date+"-"+month+"-"+year))return true;
    else return false;   
}

app.locals.fail = function(x, sdates){
    let date = new Date();
    let last = new Date(date.getTime() - (x * 24 * 60 * 60 * 1000));
    let month = last.getMonth()+1;
    let year =  last.getFullYear();
    let num_date = last.getDate();    
    if(sdates.includes(num_date+"-"+month+"-"+year))return true;
    else return false;   
}

//configuring app setting
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.set('view engine' , 'ejs');
app.set('views', 'views');


//setting up middlewares
app.use(express.urlencoded({extended:true}));
 app.use(express.json());
app.use('/', require('./routes/index'));


app.listen(port, function (err) {
    if (err) {
        return console.log('Eror in starting the server');
    }
    console.log('Server is running at port ', port);
});