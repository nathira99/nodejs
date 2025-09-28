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
  createNewTodo: async (req, res) => {
    try {
      const { jobtitle, company, notes} = req.body;

      const newId =parseInt( notes.[notes.length - 1]) + 1;
      console.log(newId);

    } catch (error) {
      res.status(500), json({ message: "todo by id fetching error" });
    }
  },
};

module.exports = todoController;
