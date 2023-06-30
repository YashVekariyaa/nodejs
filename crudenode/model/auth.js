import mongoose from "mongoose";

const signup = new mongoose.Schema({
    firstName:{
        type: String,
        required: false,
    },
    lastName:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: false,
    },
    mobile:{
        type: Number,
        required: false,
    },
    address:{
        type: String,
        required: false,
    },
});


const User = new mongoose.model("User", signup);
export default User;