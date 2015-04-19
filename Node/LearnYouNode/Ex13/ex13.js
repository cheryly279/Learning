var http = require('http'),
    url  = require('url'),
    port = process.argv[2];

var server = http.createServer(function(req, res) {
  var parsed_url = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (parsed_url.pathname === '/api/parsetime') {
    var dateVal = new Date(parsed_url.query.iso);
    res.end(JSON.stringify({
      "hour": dateVal.getHours(),
      "minute": dateVal.getMinutes(),
      "second": dateVal.getSeconds()
    }));
  }
  else if (parsed_url.pathname === '/api/unixtime') {
    var dateVal = new Date(parsed_url.query.iso);
    res.end(JSON.stringify({
      "unixtime": dateVal.getTime()
    }));
  }
});

server.listen(port);