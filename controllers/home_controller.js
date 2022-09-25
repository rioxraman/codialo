
module.exports.homeControl = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id',27);
    return res.render('home',{
        title: "HomePage "
    });
}


// module.exports.actionName = function(req,res){
//     // return res.end('<h1>Express is served</h1>');
// }