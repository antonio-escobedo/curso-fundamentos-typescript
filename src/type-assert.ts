// <> // Angle Bracket syntax
let username: any;
username = 'Statik0';

//tenemos una cadena, TS confía en mi !
// Operador de asercion <string>
let message: string = (<string>username).length > 5 ? `Welcome ${username}` : 'Username is too short';

console.log('message', message);

let usernameWithId: any = 'Statik0 1';
// como obtener el username?
username = (usernameWithId as string).substring(0,10);
console.log('Username only', username);

message = (username as string).length > 5 ? `Welcome ${username}` : 'Username is too short';

let hellouser: any;
hellouser = 'hello paparazzi';
hellouser = (hellouser as string).substr(6);
console.log('hellouser',hellouser);