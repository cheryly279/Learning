var http = require('http'),
    cs   = require('concat-stream'),
    url  = process.argv[2],
    result = "";

http.get(url, function(response) {
  response.pipe(cs(function(data) {
    result = data.toString();
    console.log(result.length);
    console.log(result);
  }));
});