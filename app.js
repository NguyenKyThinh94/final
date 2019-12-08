const express= require("express");
const bodyParser=require("body-parser")
const mongoose = require('mongoose');
const expresSession=require("express-session")
const pug=require("pug");

const routerr=require(__dirname+"/app/router");

const app=express();
const mongoDB = 'mongodb://127.0.0.1:27017/Newmongose';

const port = 8080;
app.use('/public', express.static(__dirname+'/public'))

app.set(`view engine`, 'pug');
app.set(`views`, './app/views');
app.use(routerr);
app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

mongoose.connect(
    mongoDB,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true 
})
.then(() => console.log("Connected to Database"))
.catch(err => console.error("An error has occured", err));
