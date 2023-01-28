const os = require('os');

console.log(os.arch());
console.log(os.platform());

console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.constants);

const SIZE = 1024;
const kb = (bytes) => bytes / SIZE;
console.log(kb(kb(kb(os.freemem()))));
console.log(kb(kb(kb(os.totalmem()))));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
