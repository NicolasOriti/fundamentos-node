let nombre = process.env.NOMBRE || 'Usuario';
let urlWeb = process.env.URL_WEB || 'No tengo web';

console.log(`Hola ${nombre}`);
console.log(`Mi web es: ${urlWeb}`);
