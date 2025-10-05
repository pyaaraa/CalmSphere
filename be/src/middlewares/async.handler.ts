import { NextFunction, Request, Response } from "express";

const asyncHandler = (fn:any) =>(req:Request ,res:Response,next:NextFunction  ) => {
    Promise.resolve(fn(req,res,next)).catch((err:any) => {
        res.status(500).json({
            message: err.message
        });
    });

};

export default asyncHandler;