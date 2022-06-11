const todoRoute = require('./todo.route');

const Router = app => {
    app.use('/todo',todoRoute);
    app.use('/',(req,res)=>{
        res.json({data:"Hello to do list app :)" ,success:true})
    })
}

module.exports = Router;