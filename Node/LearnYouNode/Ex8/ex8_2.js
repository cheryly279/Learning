var http = require('http'),
    bl   = require('bl'),
    url  = process.argv[2],
    result = "";

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    result = data.toString();
    console.log(result.length);
    console.log(result);
  }));
});