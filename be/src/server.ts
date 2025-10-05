import express from "express";
const cors = require('cors');
const bodyParser = require("body-parser");  //convert json data 

const app = express();
app.use(express.json());
app.use(cors());

app.post( "/signup" , (req,res)=>{
  
})

app.post( "/signin" , (req,res)=>{
  
})

app.post( "/logout" , (req,res)=>{
  
})

app.get("/profile" , (req,res)=>{

})

app.post("/survey" , (req,res)=>{
    //hit the function to extract survey data from user 
    const SurveyData = req.body;
    


})

app.listen(3001);



