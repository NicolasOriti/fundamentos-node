const otraFuncion = () => {
  seRompe();
};

const seRompe = () => {
  return 3 + z;
};

const seRompeAsincrona = () => {
  setTimeout(() => {
    return 3 + z;
  }, 2000);
};

try {
  seRompe();
} catch (error) {
  console.error('Vaya, que macana: ', error);
}
