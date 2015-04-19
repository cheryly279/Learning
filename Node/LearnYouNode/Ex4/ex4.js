var fs = require('fs'),
    file = process.argv[2];

var fileText = fs.readFile(file, 'utf8', function(err, data) {
  if (!err) {
    console.log(data.split('\n').length - 1);
  }
});