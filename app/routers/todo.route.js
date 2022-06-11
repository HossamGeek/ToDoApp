const todoRouter = require('express').Router();
const todoMiddleWare = require('../middlewares/todo.midr');
const todoController = require('../controllers/todo.ctrl');

todoRouter.post('/new',todoController.createNewToDo);
todoRouter.post("/newItem",todoMiddleWare.toDoIdIsFound,todoController.push)
todoRouter.get('/all',todoController.getAllToDoList)
todoRouter.get('/todo',todoMiddleWare.toDoIdIsFound,todoController.getToDoListIById)
// todoRouter.get('/todoItem',todoMiddleWare.toDoIdIsFound,todoMiddleWare.itemIdIsFound,todoController.getToDoListIByIdAndNotCompleted)
todoRouter.put('/markTodoIsComplete',todoMiddleWare.toDoIdIsFound,todoController.markToDoIscomplete)
todoRouter.put('/markItemIsComplete',todoMiddleWare.toDoIdIsFound,todoMiddleWare.itemIdIsFound,todoController.markToDoItemIscomplete)
todoRouter.put('/todo',todoMiddleWare.toDoIdIsFound,todoController.updateToDo)
todoRouter.put('/item',todoMiddleWare.toDoIdIsFound,todoMiddleWare.itemIdIsFound,todoController.updateToDoItem)
todoRouter.delete("/todo",todoMiddleWare.toDoIdIsFound,todoController.delteToDo)
todoRouter.delete("/item",todoMiddleWare.toDoIdIsFound,todoMiddleWare.itemIdIsFound,todoController.delteToDoItem)

module.exports = todoRouter;