var fs = require('fs');

fs.writeFile('./Files/myfile.txt', 'This is replaced content...', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
// Replace the value if the file is existed

