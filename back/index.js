const express = require('express');
const path = require('path');
const app = express();
const cors=require("cors")
const session = require('express-session');
const bodyParser = require('body-parser');
const approute=require("./route.js")
const axios=require("axios")
var MongoDBStore = require('connect-mongodb-session')(session);
const port = process.env.PORT || 3000;

require('dotenv').config();
const {SESSION_KEY,url} = require('./settings/env.js');
app.use(cors(
  {
    origin:["https://backend-alpha-blond.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
))

app.use(express.static(path.join(__dirname,'./build')));
app.use(bodyParser.json({ limit: '50mb' })); //limit limits the data which can be uploaded to server.js from frontend
app.get("/",cors(),(req,res)=>
{
  res.sendFile(path.resolve(__dirname,'./build', 'index.html'));
})
var store = new MongoDBStore({
  uri: url,
  collection: 'mySessions'
});

app.use(session({
  secret: SESSION_KEY,
  resave: false,
  store: store,
  saveUninitialized: false,
  cookie: {
      secure: true,
      maxAge: 6 * 60 * 60 * 1000, //6 hours
      rolling:true //whenever session is modified it resets expirytime
  }
}));


app.use("/en",approute);//routing to all functions

//checks if session is expired
app.get("/checksessionexpiry",async(req,res)=>{
  a=req.session.loggedInemail
  if(a!==undefined){
      res.json(1)
  }
  else{
      res.json(0)
  }
})


app.listen(3000,function(req,res)
{
    console.log("server is running")
})

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname,'./build', 'index.html'));
});
