export {};
// Tupla [1,'user']
let user: [number, string];
user = [1,'Antonio'];

console.log('user tuple', user);
console.log('username tuple', user[1]);
console.log('username tuple length', user[1].length);
console.log('id tuple', user[0]);

//Tuplas con varios valores
// id, username, isPro
let userInfo: [number,string, boolean];
userInfo = [2,'Ángelito',true];

console.log('userInfo', userInfo);

//Arreglo de tuplas
let array: [number, string][] = [];
array.push([1,'Juan']);
array.push([2,'Antonio']);
array.push([3,'Carlos']);

console.log('array',array);

//Uso de funciones de la clase array
// Carlos -> Carlos001

//array[2][1] = 'Carlos001';
array[2][1] = array[2][1].concat('001');

console.log('array',array);