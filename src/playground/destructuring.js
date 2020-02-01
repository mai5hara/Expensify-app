// const person = {
//     name: 'Mai',
//     age: 26,
//     location: {
//         city: 'Tokyo',
//         temp: 17
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperture} = person.location;
// if (city && temperture) {
//     console.log(`It's ${temperture} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// const address = ['1299 S Juniper Street', 'Tokyo', 'Saitama', '19147'];
// const [streer, city, state, zip] = address;

// console.log(`You are in ${city} ${state}.`)

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , pricem,] = items;

console.log(`A medium ${itemName} costs ${pricem}`);