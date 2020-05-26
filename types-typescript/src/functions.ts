// Crear una fotografía
//function createPicture(title, date , size) {
//title
//}

type SquareSize = '100x100' | '500x500' | '1000x1000';
//Usamos TS , definimos tipos para parámetros
/*function createPicture(title: string, date: string, size: SquareSize) {
    //se crea la fotografía
    console.log('create picture using', title, date, size)
}

createPicture('My Birthday', '2020-03-10','500x500');
createPicture('Colombia Trip', '2020-03-11');
*/
// Parámetros opcionales
function createPicture(title?: string, date?: string, size?: SquareSize) {
    //se crea la fotografía
    console.log('create picture using', title, date, size)
}

createPicture('My Birthday', '2020-03-10','500x500');
createPicture('Colombia Trip', '2020-03-11');
createPicture('Colombia Trip');
createPicture();

//Flat array function

let createPic = (title: string, date: string, size: SquareSize): object => {
    /*return {
        title: title,
        date: date,
        size: size
    }*/
    return {
        title,
        date,
        size
    }
};

const picture = createPic('Platzi Session','2020-03-12','100x100');
console.log('picture',picture);

//Tipo de retorno con TypeScript
function handleError(code: number, message: string): never | string {
    // Procesamiento del código , mensaje
    if(message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }else{
        return 'An error has ocurred';
    }
}


try{
    let result = handleError(200, 'OK');
    console.log('result', result);
    
    result = handleError(404, 'error');
    console.log('result', result);
    
}catch (error) {

}