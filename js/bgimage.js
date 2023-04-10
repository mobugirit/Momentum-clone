/*const imagenum = 5;
const randnum = Math.floor(Math.random()*imagenum); //Math 모듈
const randimg = `img/0${randnum+1}.jpg`
document.body.style.backgroundImage = `url(${randimg})`;
*/
const imageNum = 5;
const randNum = Math.floor(Math.random()*imageNum)+1;
const bgImage = document.createElement("img");
bgImage.src = `img/0${randNum}.jpg`;
bgImage.style.width = "500px"
document.body.appendChild(bgImage); 
