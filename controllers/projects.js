const { response } = require("express");
const Project = require("../Schema/Project");

//To Create New Projects
exports.createProject = async (req, res, next) => {
  console.log(req.body);
  console.log("Request Here");
  const { title, createdAt } = req.body;

  try {
    const response = await Project.create({ title, createdAt });
    if (!response._id) {
      console.log(response);
      throw new Error("Something Went Wrong");
    }
    return res.json({ id: response._id });
  } catch (error) {
    res.status(500).json({ message: "Something UnExcepted Event Occurred" });
  }
};

// To Fetch All the Projects 
exports.fetchAllProjects = async (req, res, next) => {
  try {
    const response = await Project.find({});
    console.log(response);

    return res.json(response);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "An UnExcepted Error Ocuured" });
  }
};

// To fetch a Single Project based on the Project Id
exports.fetchProject = async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const result = await Project.findById(projectId).populate("todoId");
    console.log(result)
    const filteredTodoByStatus={};
    filteredTodoByStatus.title=result.title;
    filteredTodoByStatus.createdAt=result.createdAt
    result.todoId.forEach(todo=>{
        if(!filteredTodoByStatus[todo.status]){
            filteredTodoByStatus[todo.status]= []
        }
        filteredTodoByStatus[todo.status].push(todo)
     })
     console.log("Todo Filtered One");
     
     console.log(filteredTodoByStatus)
    res.json({ result:filteredTodoByStatus });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something Went Wrong" });
  }
};
// const filterData=(todos=[])=>{
    
// }