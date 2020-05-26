export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor (id: number, title: string, orientation: PhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    get id(){
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title () {
        return this._title;
    }

    set title (title: string) {
        this._title = title;
    }

    get orientation() {
        return this._orientation;
    } 

    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`;
    }
}

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }

    get id(){
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title () {
        return this._title;
    }

    set title (title: string) {
        this._title = title;
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1,'Picture Study', PhotoOrientation.Square);
const picture2: Picture = new Picture(2,'Picture TypeScript', PhotoOrientation.Landscape);
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
