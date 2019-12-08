const express= require("express");
const Resister=require("../controller/resiter")
const router=express.Router();


router.use(express.json()) 
router.use(express.urlencoded({ extended: true })) 

router.post("/",Resister.add)
module.exports=router;