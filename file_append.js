var fs = require('fs');

fs.appendFile('./Files/myfile.txt', 'Hello Guhan!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


