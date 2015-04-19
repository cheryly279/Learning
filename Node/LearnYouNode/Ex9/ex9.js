var http = require('http'),
    url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4],
    result1 = "",
    result2 = "",
    result3 = "";

http.get(url1, function(response1) {
  response1.setEncoding("utf8");
  response1.on("data", function(data1) {
    result1 += data1;
  });
  response1.on("end", function(data1) {
    
    http.get(url2, function(response2) {
      response2.setEncoding("utf8");
      response2.on("data", function(data2) {
        result2 += data2;
      });
      response2.on("end", function(data2) {

        http.get(url3, function(response3) {
          response3.setEncoding("utf8");
          response3.on("data", function(data3) {
            result3 += data3;
          });
          response3.on("end", function(data3) {
            console.log(result1);
            console.log(result2);
            console.log(result3);
          })
        });
      })
    });
  })
});