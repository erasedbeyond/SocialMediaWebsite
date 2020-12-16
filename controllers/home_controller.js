const { populate } = require('../models/post');
const Post = require('../models/post');


module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // return res.render('home', {
    //     title: "Home"
    // });

    // Post.find({},function(err,posts) {
    //     return res.render('home',{
    //         title: "Codeial | Home",
    //         posts: posts
    //     });
    // })

    Post.find({})
    .populate('user')
    .populate({
        path:'comments', //post has array of comment iD so populate to get content
        populate:{
            path:'user' //further comment has user Id so populate to find name or other detail
        } 
    })
    .exec(function(err,posts) {
        return res.render('home',{
            title: "Codeial | Home",
            posts: posts
        });
    })
    
}

// module.exports.actionName = function(req, res){}