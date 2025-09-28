const express = require('express');
const { getAllTodos, getTodoByID, createNewTodo } = require('../controllers/controller');


const router = express.Router();

router.get('/todos', getAllTodos);
router.get('/:id', getTodoByID);
router.post('/', createNewTodo);

module.exports = router;
