const hola = (nombre, miCallback) => {
  setTimeout(() => {
    console.log(`Hola, ${nombre}`);

    miCallback(nombre);
  }, 1000);
};

const adios = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);

    otroCallback();
  }, 1000);
};

hola('Nicolas', (nombre) => {
  adios(nombre, () => {
    console.log('Terminando Proceso...');
  });
});
