"use strict";
//Export se utiliza para exponer las funcionalidades
//Importa para llamar una funcion exportada
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, 'Antonio Escobedo', 'Anton', true);
var album = new photo_app_1.Album(10, 'Platzi Pictures');
var picture = new photo_app_1.Picture(2, 'TypeScript', photo_app_1.PhotoOrientation.Landscape);
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
