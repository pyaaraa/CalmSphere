import mongoose, { Schema } from "mongoose";

const UserSchema :  Schema = new Schema({
    name :{type : String , required : true},
    email :{type : String , required : true},
    password :{type : String , required : true},
    age :{type : Number , required : true},
    gender :{type : String , required : true},
    country :{type : String , required : true},
    language :{type : String , required : true},


    // add more things that user holds / info it should hold in our app

})

const User = mongoose.model("User",UserSchema);

export default User;