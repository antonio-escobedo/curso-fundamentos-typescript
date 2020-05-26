"use strict";
// Type: object
var user;
user = {}; //object
user = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pedro',
    isPro: true
};
console.log('user', user);
//Object vs object(Clase de JS vs Tipo TS)
var myObj = {
    id: 1,
    userName: 'paparazzi',
    firstName: 'Pedro',
    isPro: true
};
var isInstance = myObj instanceof Object;
console.log('isInstance', isInstance);
console.log('myObj.userName', myObj.userName);
