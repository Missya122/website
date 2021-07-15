// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick  = function(){
//     alert("Ouch! Stop poking me!");
// }

let myImage = document.querySelector('img');
let myFigure = document.querySelector('.highlight-figure');
let myButton = document.querySelector('.change-user-btn');
let myHeading = document.querySelector('h1');
let imgDesc = document.querySelector('#highlight-img-desc');
let mapSrc = document.querySelector('.map');
let ytVideoSrc = document.querySelector('.youtube-video');
let mySrc = myImage.getAttribute('src');
let screenWidth = window.screen.width;

(function () {
    screenWidth <= 600 ? myImage.src = 'img/splash_940.jpg' : myImage.src = 'img/splash.jpeg';
    console.log(myImage.getAttribute('src'));
})();

myImage.onclick = function () {

    mySrc = myImage.getAttribute('src');
    switch (mySrc) {
        case 'img/splash.jpeg':
            myImage.setAttribute('src', 'img/ghost_info.jpeg');
            imgDesc.innerHTML = 'Many ghosts are said to manifest during the night.';
            break;
        case 'img/splash_940.jpg':
            myImage.setAttribute('src', 'img/ghost_info_940.jpg');
            imgDesc.innerHTML = 'Many ghosts are said to manifest during the night.';
            break;
        case 'img/ghost_info.jpeg':
            myImage.setAttribute('src', 'img/splash.jpeg');
            imgDesc.innerHTML = 'There are many uncharted phenomens in this world.';
            break;
        case 'img/ghost_info_940.jpg':
            myImage.setAttribute('src', 'img/splash_940.jpg');
            imgDesc.innerHTML = 'There are many uncharted phenomens in this world.';
            break;
        default:
            break;
    }

}



function setUserName() {
    let myName = prompt('Please enter your name');

    if (!myName) {
        setUserName();

    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Paranormal creatures guide for ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = `Paranormal creatures guide for ${storedName}`;
}

myButton.onclick = function () {
    setUserName();
}

window.addEventListener('load', (event) => {

    mapSrc.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.906147925786!2d21.108757568639938!3d50.562375892897784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717e2efc87f57ff%3A0xc08e523f02b4772d!2zT2dsxJlkw7N3IDI1NCwgMjgtMjAw!5e1!3m2!1spl!2spl!4v1626285705413!5m2!1spl!2spl";
    ytVideoSrc.src = "https://www.youtube.com/embed/hB7LOa9_tKc";
});