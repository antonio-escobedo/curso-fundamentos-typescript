//Tipo explicito
let idUser: any;
idUser = 1; //number
idUser = '1'; //String

console.log('idUser', idUser);

//Tipo inferido
let otherId;
otherId = 1;
otherId = "1";
// otherId = true;
console.log('otherId', otherId);

let surprise: any = 'hello any typescript';
//
// surprise = 6; Ocasiona un error por el substring, es un error potencial 
// que el compilador no detecta
const res = surprise.substring(6);
console.log('res', res);