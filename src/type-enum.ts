// Orientación para fotografías

/*const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3;*/

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
const portrait: PhotoOrientation = PhotoOrientation.Portrait;
console.log('portrait', portrait);
console.log('landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape = 10,
    Portrait,
    Square,
    Panorama
}

console.log('portrait picture', PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const country: Country = Country.Colombia;
console.log('Country', country);