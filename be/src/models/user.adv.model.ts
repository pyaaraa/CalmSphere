import mongoose, { Schema } from "mongoose";

const DailyUserSchema :  Schema = new Schema({
    day_type: {type : String , required : true},
    mood : {type : String , required : true},
    energy : {type : String , required : true},
})

const LifeStyleSchema :  Schema = new Schema({
    sleep : {type : String , required : true},
    exercise : {type : Number , required : true},
    meditation : {type : Number , required : true},
})

const UserSchema :  Schema = new Schema({
    daily_data: [DailyUserSchema],
    lifestyle: [LifeStyleSchema],
})

const UserAdvModel = mongoose.model("UserAdv",UserSchema);

export default UserAdvModel;