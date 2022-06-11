const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todo = new Schema({
    _id             :   { type: Schema.ObjectId, auto: true },
    title: {type:String},
    isCompolete :   {type:Boolean,default:false},
    items            :   [{
                             _id             :   { type: Schema.ObjectId, auto: true },
                             title            :   {type:String},
                            isCompolete          :   {type:Boolean,default:false},
                            creation_date   :   { type: Date, default: Date.now }
                         }],       
},{collection:"todo"});

todo.plugin(require('mongoose-autopopulate'));
const todoModel =mongoose.model("todo",todo);
module.exports = todoModel;
