var http = require('http'),
    url  = process.argv[2],
    result = "";

http.get(url, function(response) {
  response.setEncoding("utf8");
  response.on("data", function(data) {
    result += data;
  });
  response.on("end", function(data) {
    console.log(result.length);
    console.log(result);
  })
});