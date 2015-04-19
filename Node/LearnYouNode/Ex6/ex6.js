var filter = require('./filter.js'),
    dir    = process.argv[2],
    ext    = process.argv[3];

filter(dir, ext, function(err, list) {
  if (err) {
    console.log('error from calling filter');
  }
  else {
    for (entry of list) {
      console.log(entry);
    }
  }
});