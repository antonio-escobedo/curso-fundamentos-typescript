// Corcheres []

//tipo explicito

let users: string[];

users = ['Antonio','Paparatzo','Gustavo'];
// users = [1,true,'false']; Error de tipos

//Tipos inferidos

let otherUsers = ['Antonioo','Paparatzo','Gustavo'];
// otherId = [1,true,'false']; Error de tipos

// Array<tipo>

let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time','Landscape'];

//Accediendo a los valores en un array
console.log('Firts User', users[0]);
console.log('First title',pictureTitles[1]);

//Propiedades en array
console.log('Tamaño array users',users.length);

//Uso de funciones en array
users.push('Carlos');
console.log('Tamaño array users',users.length);
users.sort();

console.log('Users',users);