
module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "ProfilePage "
    });
}

// module.exports.profile = function(req,res){
//     return res.end('<h1>USer Profile</h1>')
// }