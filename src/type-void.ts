// void 

//Tipo explicito

function showInfo(user: any): any {
    console.log('userInfo', user.id, user.username, user.firstName);
    //return 'hola';
}

showInfo({id: 1, username: 'Gustavo', fistName: 'Escobedon'});

//Tipo inferido

function showFormattedInfo(user: any){
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({id: 1, username: 'Antonio E', firstName: 'Martinez'});

//Tipo void como tipo de dato en una variable

let unusable: void;
unusable = null;
unusable = undefined;

//Tipo Never

function handleError(code: number, message: string): never{

    // Process your code here
    //Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try{
    handleError(404,'Nor found');
}catch(error){

}

function sumNumbers(limit: number): never{
    let sum = 0;
    while(true){
        sum++;
    }
}

sumNumbers(10);
// Ciclo infinito, programa nunca termina