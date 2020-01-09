var express=require("express");
var router=express.Router();
var user=require("../modal/user")
router.get("/",function(req,res){
    var pagedata={"pagename":"login","title":"login page"};
   res.render("layout",pagedata);
});


router.post("/submit",function(req,res){
    console.log(req.body,"+++++++++++++++")


    var obj={};
    obj.name=req.body.name;
    obj.surname=req.body.surname;
    obj.age=req.body.age;
    user.insert(obj,function(err,result){
       if(err){
           console.log("errrrr",err);

           req.body.pagename="showdata";
           req.body.title="show"
           res.render("layout",req.body)       }
       if(result){
           res.redirect('/showuser');
    }
    });


});










module.exports=router;