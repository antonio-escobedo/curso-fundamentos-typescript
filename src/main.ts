console.log('Hola Platzi');

//Number

//Explicito

let phone: number;
phone = 1.343;
phone = 646464536;
// phone = 'cadena'; //error


//Inferido
let phoneI = 56;
// phoneI = true; //error

let hex: number = 0x324;
let binary: number = 0b1010;
let octal: number = 0o744;

//Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;

// isPro = 1;

//Tipado Inferido
let isUserPro = false;
isUserPro = true;
//isUserPro = 1;

// Strings
let userName : string = 'Antonio';
userName = "Juan";
// userName = true; error por tipo de dato

// Template String
// Uso del caracter special back-tick `

let userInfo: string;
userInfo = `
    User Info:
    Username: ${userName}
    firstname: ${userName + ' Escobedo'}
    phone: ${phone}
    isPro: ${isPro}    
`;

console.log('userInfo', userInfo);