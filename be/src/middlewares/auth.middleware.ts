import { NextFunction , Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "./async.handler";
import User from "../models/user.model"


const authenticate = asyncHandler(async(req:Request , res:Response , next:NextFunction )=>{
    let token;
    token = req.cookies.jwt;

    if(token){

        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET as string) as JwtPayload & { userID: string };
            req.user = await User.findById(decoded.userID).select('-password');
            next()

        }catch (error) {
            res.status(401);
            throw new Error ("Authorization failed , token failed")
        }
        
    }
    else{
        res.status(401);
        throw new Error ("Authorization failed , token failed")
    }

})

export {authenticate};
