"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    Object.defineProperty(Picture.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            this._orientation = orientation;
        },
        enumerable: false,
        configurable: true
    });
    // Comportamiento
    Picture.prototype.toString = function () {
        return "[id: " + this._id + ", title: " + this._title + ", orientation: " + this._orientation + "]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }
    Object.defineProperty(Album.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var album = new Album(1, 'Personal Pictures');
var picture = new Picture(1, 'Picture Study', PhotoOrientation.Square);
var picture2 = new Picture(2, 'Picture TypeScript', PhotoOrientation.Landscape);
album.addPicture(picture);
album.addPicture(picture2);
console.log('Estado de Picture', picture);
console.log('Estado de Picture', picture2);
console.log('Estado de Album', album);
console.log('picture.id invocando el get', picture.id); // get id()
// Accediendo a los miembros publicos
picture.id = 100; // private
picture.title = 'Another title'; // private
album.title = 'Personal Activities';
console.log('Estado de Album', album);
