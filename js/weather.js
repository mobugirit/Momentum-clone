const weatherDiv = document.querySelector(".weather");
const weather = weatherDiv.querySelector("#weather");
const temp = weatherDiv.querySelector("#temp");
const city = weatherDiv.querySelector("#city");
//2.
//https://openweathermap.org/api  -> weather API

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "3f327f0075e8da76cf2a535883ed93e1"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(  //fetch로 url 접근
    response => response.json() //내용을 js로 얻음
  ).then(
    data => {
      weather.innerText = `${data.weather[0].main}, `;
      temp.innerText = `${data.main.temp}ºC`;
      city.innerText = `, ${data.name}`;
    }
  )
}

function onGeoError(){
  alert("Can't Find you");
}

//1. lat, lon 정보 필요
//브라우저가 제공해주는 현재 위치 정보
// 정보를 불러올 수 있을때 없을 때 실행할 함수 필요
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);