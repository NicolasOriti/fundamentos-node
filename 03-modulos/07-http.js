const http = require('http');

http
  .createServer((req, res) => {
    console.log('nueva peticion!');
    console.log(req.url);

    // res.write('Hola, esto es una respuesta desde el modulo http de node.js')
    switch (req.url) {
      case '/hola':
        res.write('Hola, que tal?');
        res.end();
        break;

      default:
        res.write('Error 404');
        res.end();
        break;
    }

    res.end();
  })
  .listen(3000);

console.log('Escuchando http en el puerto 3000');
