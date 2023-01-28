const hola = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);

      resolve(nombre);
    }, 1500);
  });
};

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla blaa...');
      resolve(nombre);
      // reject('hay un error');
    }, 500);
  });
};

const adios = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);

      resolve();
    }, 1000);
  });
};

const main = async () => {
  let nombre = await hola('Nicolas');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
};

console.log('Inicio del proceso');
main();
console.log('Fin del proceso');
