//const xyz = require('./people'); // require is import file
//./ or dot-slash means same directory
//const {people} = require('./people'); // only access to people list
const {people,ages} = require('./people'); // only access to people list


//console.log(xyz);
// console.log(people); // throws error
// console.lo g(xyz.people, xyz.ages);
// console.log(people);
console.log(people,ages);

const os = require('os');
// console.log(os);
console.log(os.platform(), os.homedir());



