export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    id: number;
    title: string;
    orientation: PhotoOrientation;

    constructor (id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album {
    id: number;
    titile: string;
    pictures: Picture[];

    constructor(id: number, title: sting) {
        this.id = id;
        this.titile = title;
        this.pictures = [];
    }

    addPicture(picture: Picture) {
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