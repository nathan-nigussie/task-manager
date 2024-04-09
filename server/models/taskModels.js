const mongoose=require('mongoose');


const taskUser=new mongoose.Schema({
    name: {
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxlength: [20,'name can not be morethan 20 characters'],
    },

    taskDate: {
        type: String,


    },
    completed: {
        type: Boolean,
        default: false
    }

})

module.exports=mongoose.model('task',taskUser)