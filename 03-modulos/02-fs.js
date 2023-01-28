const fs = require('fs');

// console.log(fs);

const read = (route, cb) => {
  fs.readFile(route, (err, data) => {
    cb(data.toString());
  });
};

const write = (route, content) => {
  fs.writeFile(route, content, (err, data) => {
    if (err) {
      return console.error('No he podido escribirlo');
    }
    console.log('Se ha escrito correctamente');
  });
};

const deleteFile = (route, cb) => {
  fs.unlink(route, cb);
};

// read(`${__dirname}/02-archivo1.txt`, console.log);
// write(`${__dirname}/02-archivo1.txt`, 'soy un archivo nuevo');
// deleteFile(`${__dirname}/02-archivo1.txt`, console.log);
