var fs = require('fs'),
    file = process.argv[2],
    fileText = fs.readFileSync(file).toString();

console.log(fileText.split('\n').length - 1);