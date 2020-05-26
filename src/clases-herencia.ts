export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//Superclase
abstract class Item {
    protected _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
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

}

class Picture extends Item{
    public static readonly photoOrientation = PhotoOrientation;
    // Propiedades
    private _orientation: PhotoOrientation;

    public constructor (id: number, title: string, orientation: PhotoOrientation) {
        super(id,title);
        this._orientation = orientation;
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

class Album extends Item{
    
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id,title); // constructor de super clase
        this.pictures = [];
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

//const item = new Item(1,'Test title super class'); //No se puede instanciar una clase abstracta
//console.log('item', item);

//Probar miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);