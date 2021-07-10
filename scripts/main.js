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

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');

    // mySrc === 'img/splash.jpeg' ? myImage.setAttribute('src', 'img/ghost_info.jpeg')  : myImage.setAttribute('src', 'img/splash.jpeg');

    if (mySrc === 'img/splash.jpeg') {
        myImage.setAttribute('src', 'img/ghost_info.jpeg');
        imgDesc.innerHTML = 'Many ghosts are said to manifest during the night.';
    } else {

        myImage.setAttribute('src', 'img/splash.jpeg');
        imgDesc.innerHTML = 'There are many uncharted phenomens in this world.';
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