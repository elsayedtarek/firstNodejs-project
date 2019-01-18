let express = require("express");
let router= express.Router();
let fs = require("fs");
 let result;
 fs.readFile("json/services.json",(err,data)=>{
    if(err){
      throw err;
    }
    else{
      result=JSON.parse(data);
    }
 })

router.get("/",(req,res,next)=>{
  res.render('services',{title:"Services",

   services:result
 });
});
module.exports = router;
