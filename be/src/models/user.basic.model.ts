import mongoose, { Schema } from "mongoose";

const UserSchema :  Schema = new Schema({
    name :{type : String , required : true},
    email :{type : String , required : true},
    password :{type : String , required : true},
    age :{type : Number , required : true , default : 20},
    gender :{type : String , required : true , default : "male"},
    country :{type : String , required : true , default : "india"},
    language :{type : String , required : true , default : "english"},


    // add more things that user holds / info it should hold in our app

})

const UserBasicModel = mongoose.model("UserBasic",UserSchema);

export default UserBasicModel;