var fs   = require('fs'),
    path = require('path'),
    dir  = process.argv[2],
    ext  = process.argv[3];

fs.readdir(dir, function(err, list) {
  for (entry of list) {
    if (path.extname(entry).substring(1) === ext) {
      console.log(entry);
    }
  }
});
