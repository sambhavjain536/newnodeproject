// var mysql = require('mysql');


// module.exports=mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "sambhavjain",
//   database:'user'

// });


var MongoClient=require("mongodb").MongoClient;

var url="mongodb+srv://sambhavjain:sambhavjain@cluster0-t7pc1.mongodb.net/test?retryWrites=true&w=majority"

module.exports.init=function(cb){
  MongoClient.connect(url,cb)
}
