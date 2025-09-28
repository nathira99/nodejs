const notes = require("../data");

const todoController = {
  getAllTodos: async (req, res) => {
    try {
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: "all todofetching error" });
    }
  },
  getTodoByID: async (req, res) => {
    try {
      const todoID = req.params.id;

      const todo = notes.find(notes => notes.id === todoID);

      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ message: "todo by id: ${todoID} not found" });
      }
    } catch (error) {
      res.status(500), json({ message: "todo by id fetching error" });
    }
  },
};

module.exports = todoController;
