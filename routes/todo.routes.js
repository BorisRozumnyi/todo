const { Router } = require("express");
const config = require("config");
const Todo = require("../models/Todo");
const router = Router();

router.get("/", (req, res) => {
  try {
    res.json({ test: "test" });
  } catch (e) {
    res.status(500).json({
      message:
        "Что-то пошло не так, попробуйте снова",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const todos = req.body;
    todos.forEach((todo) => {
      const newTodo = new Todo(todo);
      newTodo.save();
    });
    res
      .status(201)
      .send(
        "POST request to the todos"
      );
  } catch (e) {
    res.status(500).json({
      message:
        "Что-то пошло не так, попробуйте снова",
    });
  }
});

module.exports = router;
