var fs = require('fs');

fs.rename('./Files/myfile.txt', './Files/myfile1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});