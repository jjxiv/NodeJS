const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20,35,30,35];
console.log(people);

// module.exports = people; // this will also be the value where variable is exported

module.exports = {
    people,ages //exporting objects
}

