"use strict";
//Export se utiliza para exponer las funcionalidades
//Importa para llamar una funcion exportada
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_orientation_1 = require("./photo-orientation");
const user = new user_1.User(1, 'Antonio Escobedo', 'Anton', true);
const album = new album_1.Album(10, 'Platzi Pictures');
const picture = new picture_1.Picture(2, 'TypeScript', photo_orientation_1.PhotoOrientation.Landscape);
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
user.removeAlbum(album);
console.log('user removed album: ', user);
