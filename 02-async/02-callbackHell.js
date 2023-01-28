const hola = (nombre, miCallback) => {
  setTimeout(() => {
    console.log(`Hola, ${nombre}`);

    miCallback(nombre);
  }, 1000);
};

const hablar = (callbackHablar) => {
  setTimeout(() => {
    console.log('Bla bla blaa...');
    callbackHablar();
  }, 2000);
};

const conversacion = (nombre, veces, callback) => {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
};

const adios = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);

    otroCallback();
  }, 1000);
};

// Callback hell    !!!!!!!
// hola('Nicolas', (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log('Terminando Proceso...');
//         });
//       });
//     });
//   });
// });

hola('Nicolas', (nombre) => {
  conversacion(nombre, 3, () => {
    console.log('Proceso terminado');
  });
});
