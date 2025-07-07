import express, { NextFunction , Request, Response } from "express";
import jwt from "jsonwebtoken";

const app = express();

export function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET as string , (err: any, decoded: any) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                })
            } else {
                (req as any).user = decoded;
                next();
            }
        })
    } else {    
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}

export function getMe(req: Request, res: Response) {
    const user = (req as any).user;

    res.send({
        username: user.username
    })
}