"use strict";
// Crear una fotografía
//function createPicture(title, date , size) {
//title
//}
//Usamos TS , definimos tipos para parámetros
/*function createPicture(title: string, date: string, size: SquareSize) {
    //se crea la fotografía
    console.log('create picture using', title, date, size)
}

createPicture('My Birthday', '2020-03-10','500x500');
createPicture('Colombia Trip', '2020-03-11');
*/
// Parámetros opcionales
function createPicture(title, date, size) {
    //se crea la fotografía
    console.log('create picture using', title, date, size);
}
createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '2020-03-11');
createPicture('Colombia Trip');
createPicture();
//Flat array function
var createPic = function (title, date, size) {
    /*return {
        title: title,
        date: date,
        size: size
    }*/
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic('Platzi Session', '2020-03-12', '100x100');
console.log('picture', picture);
//Tipo de retorno con TypeScript
function handleError(code, message) {
    // Procesamiento del código , mensaje
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has ocurred';
    }
}
try {
    var result = handleError(200, 'OK');
    console.log('result', result);
    result = handleError(404, 'error');
    console.log('result', result);
}
catch (error) {
}
