// Type: object

let user: object;
user = {}; //object

user = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pedro',
    isPro: true
}

console.log('user',user);

//Object vs object(Clase de JS vs Tipo TS)
const myObj = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pedro',
    isPro: true
};

const isInstance = myObj instanceof Object;
console.log('isInstance', isInstance);
console.log('myObj.userName',myObj.userName);