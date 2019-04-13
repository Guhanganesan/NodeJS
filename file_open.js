var fs = require('fs');

fs.open('./Files/myfile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});