var express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
  var path = process.cwd();

  console.log('request for home page');
  response.sendFile(path + '/views/index.html');
});
module.exports = router;
