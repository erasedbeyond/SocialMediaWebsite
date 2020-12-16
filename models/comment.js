const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },

    //comment of which post
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },

    //which user made comment
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
});

const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;