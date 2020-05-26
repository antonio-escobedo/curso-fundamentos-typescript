//Explicita

let nullVariable: null;
nullVariable = null;
// nullVariable = 1; error por tipo de valor

let otherVariable = null;
otherVariable = 1;

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);

// undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; Error por tipo de valor asignado

let otherUndefinedVariable = undefined;
otherUndefinedVariable = 2;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefinedVariable', otherUndefinedVariable);

//Null y undefined : como subtipos

// --strictNullChecks
let albumName: string;
//albumName = null;
//albumName = undefined;