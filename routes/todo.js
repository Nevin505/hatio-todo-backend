const express=require('express');

const routes=express.Router();

const todoController=require('../controllers/todo')

routes.post('/add',todoController.addTodo)

module.exports=routes;