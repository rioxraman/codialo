
module.exports.homeControl = function(req,res){
    return res.render('home',{
        title: "HomePage "
    });
}


// module.exports.actionName = function(req,res){
//     // return res.end('<h1>Express is served</h1>');
// }