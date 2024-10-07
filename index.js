const express=require('express')
require('dotenv').config();
const cors=require('cors')

const mongoose=require('mongoose');

const app=express();

app.use(cors())

app.use(express.json())

const userRoutes=require('./routes/user')
const projectRoutes=require('./routes/project');
const toDoRoutes=require('./routes/todo')
// Routes Handler for Different Routes User,Project and Todo Related Routes
app.use('/user',userRoutes)
app.use('/project',projectRoutes)
app.use('/todo',toDoRoutes)

app.listen(3004,()=>{
    mongoose.connect(process.env.DATABASE).then(()=>{
        console.log("Server Started");
    }).catch(error=>{
        console.log("Some Error Occurred");     
    })  
})