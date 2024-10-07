const mongoose=require('mongoose')

const {Schema}=mongoose;

const Project=new Schema({
    title:{
        type:String,
        required:true
    },
    createdAt:{
      type:Date,
      required:true
    },
    todoId:[
        {type:Schema.Types.ObjectId,ref:'Todo'}
    ],
})

module.exports=mongoose.model('Project',Project)