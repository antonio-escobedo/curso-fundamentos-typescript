export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    public constructor (id: number, title: string, orientation: PhotoOrientation) {
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
    private id: number;
    private title: string;
    private pictures: Picture[];

    public constructor(id: number, title: string) {
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
//picture.id = 100; // private
//picture.title = 'Another title'; // private
//album.title = 'Personal Activities';

console.log('Estado de Album', album);
