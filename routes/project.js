const express=require('express');

const router=express.Router();

// Project Controller
const projectController=require('../controllers/projects')


// Route to Create New Projects
router.post('/create',projectController.createProject)

router.get('/fetchAll',projectController.fetchAllProjects)

router.get('/:projectId',projectController.fetchProject)


module.exports=router;