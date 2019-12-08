const express= require("express");
const Longin=require("../controller/longin")
const router=express.Router();


router.use(express.json()) 
router.use(express.urlencoded({ extended: true })) 

router.post("/",Longin.findUser)
module.exports=router;