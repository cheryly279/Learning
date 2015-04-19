var http = require('http'),
    map  = require('through2-map'),
    fs   = require('fs'),
    port = process.argv[2];

var server = http.createServer(function(req, res) {
  req.setEncoding("utf8");
  req.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port);