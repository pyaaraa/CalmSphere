import mongoose, { Schema } from "mongoose";
import { DailyUserSchema, LifeStyleSchema } from "./user.adv.model";


//some basic + advanced user details 
const UserSchema : Schema = new Schema({    
    name :{type : String , required : true},
    email :{type : String , required : true , unique : true},
    password :{type : String , required : true},
    age :{type : Number , required : true , default : 20},
    gender :{type : String , required : true , default : "male"},
    country :{type : String , required : true , default : "india"},
    language :{type : String , required : true , default : "english"},
    
    daily_data: [DailyUserSchema],
    lifestyle: [LifeStyleSchema], 


    // add more things that user holds / info it should hold in our app

})




const UserModel = mongoose.model("User",UserSchema);

export default UserModel;