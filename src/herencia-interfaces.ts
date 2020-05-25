export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}
// Herencia de interface

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    // Copia de los atributos de Entity
    description: string;
}

interface Picture extends Entity {
    // Copia de los atributos de Entity
    orientation: PhotoOrientation
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
};

const picture: Picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Portrait
};

let newPicture = {} as Picture
newPicture.id = 3;
newPicture.title = 'Moon';
console.log('Estado Picture: ', picture);
console.log('Estado Album: ', album);
console.log('Estado Newpicture: ', newPicture);
let newAlbum = <Album>{};
newAlbum.id = 5;
newAlbum.title = 'Album Nuevo';
newAlbum.description = 'Album of travels';
console.log('Estado Newalbum: ', newAlbum);
