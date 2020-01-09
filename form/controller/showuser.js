var express=require("express");
var router=express.Router();
var user=require("../modal/user")

router.get("/",function(req,res){
   user.find(function(err,result){
      console.log(result,"sssssssssss");
      var pagedata={"pagename":"showdata","title":"show user","userdata":result}
      res.render("layout",pagedata);
   })
});


module.exports=router;  