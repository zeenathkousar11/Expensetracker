import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        // required : true,
        maxlength: 40,
        minlength: 2
    },
    email:{
        type:String,
        // required : true
    },
    // countryCode : {
    //     type:String,
    //     default : '91'
    // },
    // phone:{
    //     type:String,
    //     // required : true
    // },
    password:{
        type:String,
        // required : true
    }
})

const UsersModel =  mongoose.model('Users',userSchema,"users");

export default UsersModel;