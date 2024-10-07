const TODO=require('../Schema/Todo');
const Project=require('../Schema/Project');

exports.addTodo = async (req, res, next) => {
    const { description, status, projectId } = req.body;
    try {
      // Check if projectId is provided
      if (!projectId) {
        return res.status(400).json({ message: "Project ID is required" });
      }

      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
  
      // Create the todo
      const response = await TODO.create({ description, status, projectId });
  
      // Push the new todo's ID into the project's todoId array
      project.todoId.push(response._id);
  
      // Save the updated project
      const saveResponse = await project.save();

      return res.status(201).json({ message: "Todo added successfully", todo: response });
    } catch (error) {
      console.error("Error adding todo:", error);
  
      // Send an error response if something goes wrong
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  