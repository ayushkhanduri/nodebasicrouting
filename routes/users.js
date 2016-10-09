var express = require('express');
var url = require('url');

var router = express.Router();


router.get('/[-0-9]+',function(req,res,next){
  var uri = url.parse(req.url).pathname;
  var id = uri.split('/')[1];
  console.log(uri.split('/')[1]);
  res.render('userid',{
    userid: id
  });
});

module.exports = router;
