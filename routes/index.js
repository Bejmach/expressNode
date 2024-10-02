var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.end('Strona Glowna');
});
router.get('/json', function(req, res){
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"json":{"servers":{"users"{"user"{"name":"test","id":1}}}}}');
});
router.get('/htmlGen', function(req, res){
  var html = '<H1>Test page</H1><div>node js from code</div>'
	res.end(html);
})

module.exports = router;
