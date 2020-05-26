// Funcion para mostrar una fotografía
export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string, 
    date: string, 
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test Title',
    date: '2020-05-25',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-05-25',
    orientation: PhotoOrientation.Portrait
    //extra: 'test' //Error
});

interface PictureConfig {
    title?: string,
    date?: string,
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'Default', date: '2020-05'};
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({});
console.log('Estado Picture: ', picture);

picture = generatePicture({title: 'Travel Picture'});
console.log('Estado Picture: ', picture);

//Interface: Usuario
interface User {
    readonly id: number;
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 4, username: 'Statik0', isPro: true};
console.log('user estado:' , user);
user.username = 'Paparazzi';
// user.id = 1; //Error para compilador
console.log('user estado:' , user);