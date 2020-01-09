



var connect=require("../config/connect");


module.exports.insert=function(obj,cb){
  connect.init(function(err, client){
		var db = client.db("signuptest")
		db.collection('user').insert(obj, cb)
	});
}


module.exports.find=function(cb){
  connect.init(function(err,client){
    var db = client.db("signuptest")
		db.collection('user').find({}).toArray(cb);
	});

}

module.exports.findwhere=function(obj,cb){
  connect.init(function(err,client){
    var db = client.db("signuptest")
		db.collection('user').find(obj).toArray(cb);
	}); 
}

module.exports.update=function(where,obj,cb){
  connect.init(function(err,client){
    var db = client.db("signuptest")
		db.collection('user').update(where,{$set:obj},cb);
	}); 
}


























// var con=require("../config/connect");

// module.exports.insert=function(obj,cb){
//   con.getConnection(function(err){
//       if(err){
//   console.log(err,"conncection not stable")
// }
// var que="INSERT INTO datatable(name,surname,age) VALUES ('"+obj.name+"','"+obj.surname+"',"+obj.age+")";
//     con.query(que,cb)
//   });

// }


// module.exports.find=function(cb){
//     con.getConnection(function(err){
//         if(err){
//     console.log(err,"conncection not stable")
//   }
//   var que="select * from user"
//       con.query(que,cb)
//     });
    
// }

