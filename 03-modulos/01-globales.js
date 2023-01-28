console.log(global);
let i = 0;

const intervalo = setInterval(() => {
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
  console.log(i);
}, 1000);

setImmediate(() => {
  console.log('Hola');
});

console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariable = 'El valor';
console.log(miVariable);
