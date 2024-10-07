const mongoose = require("mongoose");

const { Schema } = mongoose;

const user = new Schema({
  email: 
    {
      type: String,
      required: true,
      unique: true,
    },
  password: 
    {
      type: String,
      required: true,
      unique: true,
    },
  userName:{
    type:String,
  }
});

module.exports=mongoose.model("Users",user);