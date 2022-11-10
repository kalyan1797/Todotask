const express = require("express");
const TodoControls = require("../controls/todo");

const router = express.Router();

router.post("/", TodoControls.createTodo);

router.get("/", TodoControls.getTodos);

router.get("/:todoId", TodoControls.getTodo);

router.put("/:todoId", TodoControls.updateTodo);

router.delete("/:todoId", TodoControls.deleteTodo);

module.exports = router;
