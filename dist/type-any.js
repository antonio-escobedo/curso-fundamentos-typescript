//Tipo explicito
var idUser;
idUser = 1; //number
idUser = '1'; //String
console.log('idUser', idUser);
//Tipo inferido
var otherId;
otherId = 1;
otherId = "1";
// otherId = true;
console.log('otherId', otherId);
var surprise = 'hello any typescript';
//
// surprise = 6; Ocasiona un error por el substring, es un error potencial 
// que el compilador no detecta
var res = surprise.substring(6);
console.log('res', res);
