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

console.log('Iniciando el proceso');
hola('Nicolas')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log('Terminado el proceso');
  })
  .catch((error) => {
    console.error('Ha habido un error:');
    console.error(error);
  });
