"use strict";
//Explicita
var nullVariable;
nullVariable = null;
// nullVariable = 1; error por tipo de valor
var otherVariable = null;
otherVariable = 1;
console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);
// undefined
var undefinedVariable = undefined;
// undefinedVariable = 'test'; Error por tipo de valor asignado
var otherUndefinedVariable = undefined;
otherUndefinedVariable = 2;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefinedVariable', otherUndefinedVariable);
//Null y undefined : como subtipos
// --strictNullChecks
var albumName;
//albumName = null;
//albumName = undefined;
