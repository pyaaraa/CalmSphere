import mongoose, { Schema } from "mongoose";

const UserSchema :  Schema = new Schema({
    
})

const User = mongoose.model("User",UserSchema);

export default User;