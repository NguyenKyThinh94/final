const express= require("express");
const router=express.Router();

router.use("/resiter",require(__dirname +"/resiter.router.js"));
router.use("/longin",require(__dirname +"/longin.router.js"));

router.get("/",(req,res)=>res.render('index', {
    massage: ''
}))

module.exports=router;