var express=require("express");
var app=express();
var bodyparser=require("body-parser");

app.set("view engine","ejs");
// app.set("views","view");
app.use(bodyparser());


app.use(require("./controller/default"))



app.listen(2000,function(){
    var obj={};
    obj.name="shreya"
    console.log(obj)
    console.log("server")
})