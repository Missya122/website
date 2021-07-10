// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick  = function(){
//     alert("Ouch! Stop poking me!");
// }

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');

    mySrc === 'img/splash.jpeg' ? myImage.setAttribute('src', 'img/ghost_info.jpeg') : myImage.setAttribute('src', 'img/splash.jpeg');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    
    if(!myName){
        setUserName();

    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = `Paranormal creatures guide for ${myName}`;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = `Paranormal creatures guide for ${storedName}`;
}

myButton.onclick = function () {
    setUserName();
}

setUserName();
