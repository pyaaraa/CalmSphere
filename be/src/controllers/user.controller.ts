import User from "../models/user.model";
import asyncHandler from "../middlewares/async.handler";
import { Request, Response } from "express";
import user from "../models/user.model"
import bcrypt from "bcryptjs"
import { hash } from "crypto";
import generateToken from "../utils/createToken";

const createUser = asyncHandler(async(req:Request,res:Response) => {
    const { name , email , password } = req.body;

    if(!name || !email || !password){
        throw new Error ( "Please fill all the inputs.")
    }

    const userExists = await User.findOne({email});
    if(userExists) res.status(400).send("User already exists");

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new user({name,email,password:hashedPassword})

    try{
        await newUser.save();
        generateToken(res, newUser._id )

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

export { createUser }