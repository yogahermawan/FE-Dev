let myVariable = document.querySelector('h1');
myVariable.textContent = 'Hello World!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'scripts/images/download.png') {
      myImage.setAttribute ('src','scripts/images/firefox2.png');
    } else {
      myImage.setAttribute ('src','scripts/images/download.png');
    }
}

// angka1 = 2;
// angka2 = "3";
// console.log(angka1+angka2);