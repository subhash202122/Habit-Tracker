const mongoose = require('mongoose');
const e = require('express');

//mongodb config hosted on Mongo Atlas

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Subhash202122:Subhash2021@cluster0.b64kg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


mongoose.connect('mongodb+srv://Subhash202122:Subhash2021@cluster0.b64kg.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function(err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Connected to db!');
        
    }
});


module.exports = db;