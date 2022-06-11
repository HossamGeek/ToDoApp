let resErr = (err)=>({data:err.name,err:err.errors[0],success:false}); 
let idIsNotFound = (key) => ({err:key + " is required in headers",success:false});
module.exports = {
   itemIdIsFound : (req,res,next)=>{
        let {item_id} = req.headers; 
        if(!item_id)return res.json(idIsNotFound("item_id"));
        next();
     },
     toDoIdIsFound : (req,res,next)=>{
        let {todo_id} = req.headers; 
        if(!todo_id)return res.json(idIsNotFound("todo_id"));
        next();
     }
};