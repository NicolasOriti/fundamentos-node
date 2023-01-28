process.on('beforeExit', () => {
  console.log('Esta por terminar el proceso');
});

process.on('exit', () => {
  console.log('Termino el proceso');
  setTimeout(() => {
    console.log('esto no se va a ver nunca');
  }, 1000);
});

setTimeout(() => {
  console.log('esto si se va a ver');
}, 1000);

process.on('uncaughtException', (err, origin) => {
  console.log('Se nos olvido capturar este error: ');
  console.error(err);
});

// functionQueNoExite(); //para forzar un error
