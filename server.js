const Express = require("express");
const path = require("path");
const server = Express();

server.use(Express.static(__dirname + '/dist'));

server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});

server.listen(3000, function() {
  console.log('Server listening on port 3000...');
});