console.group('Probando la consola');
console.log('Algo');
console.info('Infoo');
console.warn('Warning');
console.error('Error');
console.groupEnd();

const tabla = [
  {
    a: 1,
    b: 'A',
  },
  {
    a: 2,
    b: 'B',
  },
  {
    a: 3,
    b: 'C',
  },
  {
    a: 4,
    b: 'D',
  },
];

console.table(tabla);

const function1 = () => {
  console.group('funcion 1');
  console.log('Esto es de la funcion 1');
  console.log('Esto tambien');
  console.groupEnd();
  function2();
};
const function2 = () => {
  console.group('funcion 2');
  console.log('Ahora en la funcion 2');
  console.log('Esto tambien');
  console.groupEnd();
};

console.log('Grupo de consolas');
function1();
