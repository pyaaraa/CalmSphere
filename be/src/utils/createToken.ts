import jwt from "jsonwebtoken"
const generateToken = (res:any,userID:any) => {
    
    const Token = jwt.sign({userID},process.env.JWT_SECRET as string,{                
        expiresIn : "15d"
    });
    

        res.cookie(jwt,"token",{        
        httponly : true,
        secure : process.env.NODE_ENV !== "development",
        sameSite : "strict",
        maxAge: 15 * 24 * 60 * 60 * 1000,

    })

    return Token;
}

export default generateToken;
