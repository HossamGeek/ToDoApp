const todoService = require('../services/todo.service');
const mongoose = require('mongoose');
const id = (_id)=>mongoose.Types.ObjectId(_id);
const createNemToDo = (data) => todoService.createTodo(data);
const pushInToDo = (todo_id,items) => todoService.pushInList(todo_id,'items',items)
module.exports = {
    createNewToDo : (req,res)=>{
        console.log("req",req.body);
        let {title="",isCompolete = false,items = null} = req.body;
            createNemToDo({title,isCompolete,items})
                        .then(data=>res.json({data,success:true}))
                        .catch(err=>res.json({err,success:false}))
    },
    push : (req,res)=>{
        let _id = id(req.headers['todo_id']);
        console.log("req.body",req.body);
        let {items} = req.body;
        if(items && items.length)
            pushInToDo({_id},items)
                        .then(data=>res.json({data,success:true}))
                        .catch(err=>res.json({err,success:false}))
        else  res.json({err:"items is empty",success:false})                 
        
    },
    getAllToDoList : (req,res)=>{
        todoService.findTodo({})
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json({err,success:false}))
    },
    getToDoListIById : (req,res)=>{
        let _id = id(req.headers['todo_id']);
        todoService.findTodo(_id)
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json({err,success:false}))
    },
    getToDoListIByIdAndNotCompleted : (req,res)=>{
        let _id = id(req.headers['todo_id']);
        todoService.findlist(_id,{isCompolete:false})
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json({err,success:false}))
    },
    markToDoItemIscomplete : (req,res)=>{
        let _id = id(req.headers['todo_id']);
        let item_id = id(req.headers['item_id']);
        let isCompolete = {"items.$.isCompolete":true}
        todoService.updateList(_id,{_id:item_id},isCompolete)
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json({err,success:false}))
    },
    markToDoIscomplete : (req,res)=>{
        let _id = id(req.headers['todo_id']);
        let isCompolete = {"isCompolete":true}
        todoService.updateList(_id,{},isCompolete)
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json({err,success:false}))
    },
    updateToDoItem : (req,res)=>{
        let _id = id(req.headers['todo_id']);
        let item_id = id(req.headers['item_id']);
        let title = {"items.$.title":req.body.title}
        todoService.updateList(_id,{_id:item_id},title)
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json({err,success:false}))
    },
    updateToDo : (req,res)=>{
        let _id = id(req.headers['todo_id']);
        let title = {"title":req.body.title}
        todoService.updateTodo(_id,title)
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json({err,success:false}))
    },
    delteToDo : (req,res)=>{
        let _id = id(req.headers['todo_id']);
        todoService.deleteToDo(_id)
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json({err,success:false}))
    },
    delteToDoItem : (req,res)=>{
        let _id = id(req.headers['todo_id']);
        let item_id = id(req.headers['item_id']);
        todoService.deleteToDoItem(_id,item_id)
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json({err,success:false}))
    },

};