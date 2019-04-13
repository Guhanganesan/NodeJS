var fs = require('fs');

fs.unlink('./Files/myfile1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});


