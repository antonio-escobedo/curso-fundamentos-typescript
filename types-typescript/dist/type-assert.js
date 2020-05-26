"use strict";
// <> // Angle Bracket syntax
var username;
username = 'Statik0';
//tenemos una cadena, TS confía en mi !
// Operador de asercion <string>
var message = username.length > 5 ? "Welcome " + username : 'Username is too short';
console.log('message', message);
var usernameWithId = 'Statik0 1';
// como obtener el username?
username = usernameWithId.substring(0, 10);
console.log('Username only', username);
message = username.length > 5 ? "Welcome " + username : 'Username is too short';
var hellouser;
hellouser = 'hello paparazzi';
hellouser = hellouser.substr(6);
console.log('hellouser', hellouser);
