import express from "express";
import jwt from "jsonwebtoken";
const cors = require('cors');

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

app.listen(3001);



