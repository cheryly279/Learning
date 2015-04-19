var fs   = require('fs'),
    path = require('path');

module.exports = function (dirName, extension, cb) {
  fs.readdir(dirName, function(err, list) {
    if (err) {
      return cb(err);
    }

    var retArray = [];

    for (entry of list) {
      if (path.extname(entry).substring(1) === extension) {
        retArray.push(entry);
      }
    }

    cb(null, retArray);
  });
};