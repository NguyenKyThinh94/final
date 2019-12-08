
const User=require("../module/module")
function valid(user){
    if(user.name.length < 1 || user.name.password < 4 || user.email.length < 1 ) return false;
    return true;
}
function addUser(req,res){
    
    let newUser=[];
    newUser=req.body;
    if(valid(newUser)){
        let user1 = new User({
            user: newUser.user,
            pass: newUser.password,
            email: newUser.email
          })  
        user1.save()
          .then(doc => {
            console.log(doc)
          })
          .catch(err => {
            console.error(err)
          })  
          res.redirect('/')
    }
}
const Resister={
    add:addUser
}
module.exports=Resister;