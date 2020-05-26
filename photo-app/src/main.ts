//Export se utiliza para exponer las funcionalidades
//Importa para llamar una funcion exportada

import {User } from './user';
import { Album } from './album';
import { Picture } from './picture';
import { PhotoOrientation } from './photo-orientation';

const user = new User(1,'Antonio Escobedo','Anton',true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(2, 'TypeScript',PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

user.removeAlbum(album);
console.log('user removed album: ', user);