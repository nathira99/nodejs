const express = require('express');
const { getAllTodos, getTodoByID } = require('../controllers/controller');


const router = express.Router();

router.get('/todos', getAllTodos);
router.get('/:id', getTodoByID);

module.exports = router;
