const { exec, spawn } = require('child_process');

// exec('node 03-modulos/03-consola.js', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);

// });

const proceso = spawn('node', ['03-modulos/03-consola.js']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
  console.log(data.toString());
});

proceso.on('exit', () => {
  console.log('El proceso termino');
});
