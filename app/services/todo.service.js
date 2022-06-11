const Todo = require('../models/todo.mdl');
module.exports = {
    createTodo : (todoData) => {
        let newTodo = new Todo(todoData);
        return newTodo.save();
    },
    findTodo :(where)=>{
        return Todo.find(where);
    },
    pushInList(where, field, updates, opt = {}) {
        return Todo.updateOne(
          where,
          { $push: { [field] : { $each:updates} }},
          opt
        );
    },
    findlist:(_id,filter={})=>{
         return Todo.find({_id,
            'items': {$elemMatch:filter}}
            
        )
         //.select(  { list: { $elemMatch: {action:true} } })
    },
    updateTodo (_id, updates={}, opt = {}){
        console.log(_id, updates);
        return Todo.updateOne({  
            _id,
        }, { $set: updates }, opt);
    },
    updateList(_id,filter, updates={}, opt = {}) {
        console.log(_id,filter, updates);
        return Todo.updateOne({  
            _id,
            items: 
            { $elemMatch : 
                filter
            } 
        }, { $set: updates }, opt);
      },
      deleteToDo(_id){
        return Todo.remove({  
            _id});
      },
      deleteToDoItem(_id,item_id){
          console.log(_id,item_id);
        return Todo.updateOne({  
            _id,
           },
           {$pull: {items: {_id: item_id}}}
            
        )
      }
      


}
