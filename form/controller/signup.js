var express=require("express");
var router=express.Router();
var user=require("../modal/user");

var mongodb=require("mongodb");

router.get("/",function(req,res){
    var obj={};
    obj.name="swati";
    obj.surname="verma";
    obj.address="dewas";
    obj.email="swati@gmail.com";
    obj.password="456";
user.insert(obj,function(err,result){
    if(err){
        res.send(err)
    }else{
        res.send(result)
    }
})
    
});



router.get("/find",function(req,res){
    user.find(function(err,result){
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    });

    });


    router.get("/findwhere",function(req,res){
        var obj={};
        obj.email="sanjaypatidar402@gmail.com";
        obj.password="123";
        user.findwhere(obj,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        });
    
        });


        router.get("/update",function(req,res){
            var obj={};
            obj.email="shreya@gamil.com";
            obj.password="123";
            var id="5e1032e91e5030123c41f6e5"
            
            user.update({_id:mongodb.ObjectId(id)},obj,function(err,result){
                if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
            });
        
            });

module.exports=router;


var express=require("express");
