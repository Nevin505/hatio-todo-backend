const mongoose=require('mongoose');
const {Schema}=mongoose;
const Todo=new Schema({
    description:{
        type:String,
        required:true
    },
    status:{
            type:String,
            default:'Pending'
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
    },
    updatedAt:Date,
     projectId:Schema.Types.ObjectId
})

module.exports=mongoose.model('Todo',Todo);