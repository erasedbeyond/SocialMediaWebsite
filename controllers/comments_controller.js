const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req,res) {
    Post.findById(req.body.post,function(err,p) {
        if(p){ //p is post find
            Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            },function(err,comment) {
                //error handling
                if(err){console.log("error in creating comment"); return;}  

                p.comments.push(comment);
                p.save();
                
                res.redirect('/');
            });
        }
    });
} 