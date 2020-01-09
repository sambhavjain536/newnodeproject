var express=require("express");
var router=express.Router();


router.use("/login",require("./login"));
router.use("/showuser",require("./showuser"));
router.use("/signup",require("./signup"))

module.exports=router;
