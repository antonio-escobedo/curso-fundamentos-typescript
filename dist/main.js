console.log('Hola Platzi');
//Number
//Explicito
var phone;
phone = 1.343;
phone = 646464536;
// phone = 'cadena'; //error
//Inferido
var phoneI = 56;
// phoneI = true; //error
var hex = 0x324;
var binary = 10;
var octal = 484;
//Boolean
// Tipado Explicito
var isPro;
isPro = true;
// isPro = 1;
//Tipado Inferido
var isUserPro = false;
isUserPro = true;
//isUserPro = 1;
// Strings
var userName = 'Antonio';
userName = "Juan";
// userName = true; error por tipo de dato
// Template String
// Uso del caracter special back-tick `
var userInfo;
userInfo = "\n    User Info:\n    Username: " + userName + "\n    firstname: " + (userName + ' Escobedo') + "\n    phone: " + phone + "\n    isPro: " + isPro + "    \n";
console.log('userInfo', userInfo);
