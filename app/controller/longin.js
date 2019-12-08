const User=require("../module/module")
function findUser(req,res){
    let logginUser=[];
    logginUser=req.body;
    let user1=User.findOne({'user': logginUser.user});
        user1.exec()
        .then((something)=>{
            let pass=something.getPass();
            if(logginUser.password == pass) {
                console.log('Dúng mật khẩu');
                res.render('admin/admin',{
                    list: []
                })
            } else {
               console.log('sai mật khẩu')
               res.render('index', {
                massage: 'Sai mật khẩu'
            })
            }
         })
         .catch((error)=>{
            console.log(error);
            res.render('index', {
                massage: 'Không tồn tại user'
            })
         }) 
}
const Longin={
    findUser:findUser
}
module.exports=Longin;