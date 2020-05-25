"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ", date: " + picture.date + ", orientation: " + picture.orientation + "]");
}
var myPic = {
    title: 'Test Title',
    date: '2020-05-25',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-05-25',
    orientation: PhotoOrientation.Portrait
    //extra: 'test' //Error
});
function generatePicture(config) {
    var pic = { title: 'Default', date: '2020-05' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log('Estado Picture: ', picture);
picture = generatePicture({ title: 'Travel Picture' });
console.log('Estado Picture: ', picture);
var user;
user = { id: 4, username: 'Statik0', isPro: true };
console.log('user estado:', user);
user.username = 'Paparazzi';
// user.id = 1; //Error para compilador
console.log('user estado:', user);
