const Todo = require("../models/todo");

//create a todo
exports.createTodo = (req, res, next) ==> {
    console.log(
        (new Date()).to ISOString(),
        req.method
        req.baseUrl
    );
    // create a new todo object 
    const todo = new Todo(req.body);
    todo.save()
         .then(
             createdTodo => {
                 res.status(201).json({
                     "status" : "Success"
                     "message" : "Todo Created Successfully!",
                     "todo" : {
                         createdTodo._doc,
                         todoId: createdTodo._id
                     }
                 })
             }
         )
         .catch(
             error => {
                 res.status(500).json({
                     "status" : "Error"
                     "message" : "Error in DB Operation!"
                     "error" : error
                 });
             }
         )
}

// To get list of Todos
exports.getTodos = (req, res, next) => {
    console.log(
        (new Date()).toISOString(),
        req.method,
        req.baseUrl
    );
    // Set up Todo query
    const TodoQuery = Todo.find().sort({
        onDate:-1
    });
    TodoQuery.then(
        todos => {
            if (!todos.length) {
                return res.status(404).json({
                    "status" : "Success",
                    "message" : "No Todos found!",
                    "todos" : todos,
                    "todoCount" : todos.length
                });
            }
            res.status(200).json({
                "status" : "Success",
                "message" : "Todos Fetched Successfully",
                "todos" : todos,
                "todoCount" : todos.length
            });
        }
    )
    .catch(
        error => {
            res.status(500).json({
                "status" : "Error",
                "message" : "Error in DB Operation!",
                "error" : error
            });
        }
    )
}

// to get a specific Todo
exports.getTodo = (req, res, next) => {
    console.log (
        (new date()).toISOString(),
        req.method,
        req.baseUrl
    );

    const todoId = req.params.todoId:;

    Todo.findOne({
        _id: todoId
    })
    .then(
        todo => {
            if (!todo) {
                return res.status(404).json({
                    "status" : "Success",
                    "message" : "No Tod found with that Id!"
                    "todo" : todo
                });
            }
            res.status(200).json({
                "status" : "Success"
                "message" : "Todo Fetched Successfully!",
                "todo" : todo
            });
        }
    )
    .catch(
        error => {
            res.status(500).json({
                "status" : "Error",
                "message": "Error in DB Operation !",
                "error" : error
            });
        }
    )
}
// to Update a Todo
exports.updateTodo = (req, res, next) =>{
    console.log(
        (new Date()).toISOString(),
        req.method,
        req.baseUrl
    );
    const todoId = req.params.todoId;

    const data = req.body;

    Todo.findOneAndUpdate({
        _id : todoId
    }, {
        ...data,
        "timestamps.modifiedOn" : Date.now()
    }, {
        new : true
    })
    .then(
        updatedTodo => {
            res.status(201).json({
                "status" : "success",
                "message" : " Todo Updated Successfully !",
                "todo" : updatedTodo
            })
        }
    )
    .catch(
        error => {
            res.status(500).json({
                "status" : "Error"
                "message" : "error in DB Operation !"
                "error" : error
            });
        }
    )

}

// To delete a Todo
exports.deleteTodo = (req, res, next) => {
    console.log(
        (new Date()).toISOString(),
        req.method,
        req.baseUrl
    );
    const todoId = req.params.todoId;
    Todo.findOneAndDelete({
        _id : todoId
    })
    .then(
        deletedTodo => {
            res.status(201).json({
                "status" : "success",
                "message" : "Todo Deleted Successfully!",
            })
        }
    )
    .catch (
        error => {
            res.status(500).json({
                "status" : "Error"
                "message" : "Error in DB Operation!"
                "error" : error
            });
        }
    )
}
