import User from "../models/user.model";
import asyncHandler from "../middlewares/async.handler";
import { Request, Response } from "express";
import bcrypt from "bcryptjs"
// import { hash } from "crypto";
import createToken from "../utils/createToken";

const createUser = asyncHandler(async(req:Request,res:Response) => {
    const { name , email , password } = req.body;

    if(!name || !email || !password){
        throw new Error ( "Please fill all the inputs.")
    }

    const userExists = await User.findOne({email});
    if(userExists) res.status(400).send("User already exists");

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new User({name,email,password:hashedPassword})

    try{
        await newUser.save();
        createToken(res, newUser._id )

        res.status(201).json({
        _id : newUser._id ,
        name : newUser.name ,
        email : newUser.email
    });
    }catch(error){
        res.status(400)
        throw new Error("Invalid user data")
    }
    

})


const loginUser = asyncHandler(async (req:any, res:any) => {
    const { email, password } = req.body;
  
    console.log(email);
    console.log(password);
  
    const existingUser = await User.findOne({ email });
  
    if (existingUser) {
      const isPasswordValid = await bcrypt.compare(
        password,  //entered password
        existingUser.password as string
      );
      
      if (isPasswordValid) {
        createToken(res, existingUser._id);
  
        res.status(201).json({
          _id: existingUser._id,
          username: existingUser.name,
          email: existingUser.email,
          isAdmin: existingUser.isAdmin,
        });
        return;
      }
    }
  });


  const logoutCurrentUser = asyncHandler(async(req:any, res:any)=>{
    res.cookie("jwt", '' , {
        httpOnly : true,
        expires : new Date(0)
    });
    res.status(200).json({message : "logget out successfully"})

  })



export { createUser, loginUser , logoutCurrentUser }