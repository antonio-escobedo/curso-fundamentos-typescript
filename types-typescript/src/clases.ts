export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    constructor (id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album {
    public id: number;
    public title: string;
    public pictures: Picture[];

    public constructor(id: number, title: sting) {
        this.id = id;
        this.title = title;
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

// Accediendo a los miembros publicos
picture.id = 100; // public
picture.title = 'Another title'; // public
album.title = 'Personal Activities';

console.log('Estado de Album', album);