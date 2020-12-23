const Post = require('../models/post');
const User = require('../models/user');



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
        User.find({}, function(err, users){
            return res.render('home', {
                title: "Codeial | Home",
                posts:  posts,
                all_users: users
            });
        });
    })
    
}

// module.exports.actionName = function(req, res){}