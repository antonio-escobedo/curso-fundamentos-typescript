"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
};
var picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Portrait
};
var newPicture = {};
newPicture.id = 3;
newPicture.title = 'Moon';
console.log('Estado Picture: ', picture);
console.log('Estado Album: ', album);
console.log('Estado Newpicture: ', newPicture);
var newAlbum = {};
newAlbum.id = 5;
newAlbum.title = 'Album Nuevo';
newAlbum.description = 'Album of travels';
console.log('Estado Newalbum: ', newAlbum);
