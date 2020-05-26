export {};
// 10, '10'
/* let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameById(id: number | string) {
    // Logica de negocio, find the user
    return 'statik0'
}

getUsernameById(20);
getUsernameById('20'); */

// Alias de tipos para : TS
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameById(id: IdUser): Username {
    // Logica de negocio, find the user
    return 'statik0'
}

getUsernameById(20);
getUsernameById('20');


// Tipos literales
// 100x100, 500x500, 1000x1000

type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPciture: SquareSize = '200x200'; // Error
let smallPicture: SquareSize = '100x100';
let mediaumPicture: SquareSize = '500x500';
