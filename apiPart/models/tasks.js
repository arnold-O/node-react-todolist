const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({

task: {
        type:String,
        required:true,
    },
comment: {
        type:String,
        required:true,
    },
    completed: {
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})
const Tasks = mongoose.model('Tasks', taskSchema)

    module.exports = Tasks