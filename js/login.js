const loginForm = document.querySelector("#login-Form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function paintH1(username){ //h1 보이기
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASS);
}

function onLoginSubmit(event){ //폼 제출되면
  event.preventDefault();
  const username = loginInput.value;
  loginInput.value = "" //칸 비우고
  loginForm.classList.add(HIDDEN_CLASS); //로그인 폼 숨기기
  localStorage.setItem(USERNAME_KEY, username); //local Storage 저장
  paintH1(username); //h1 보이기
}


//1.1. localStorage에서 불러옴
const savedUsername = localStorage.getItem(USERNAME_KEY);

//1.2. 존재하는지 확인 
if(savedUsername === null){ // 없다면
  loginForm.classList.remove(HIDDEN_CLASS); //보이게 하고
  loginForm.addEventListener("submit", onLoginSubmit);
}else{ //있다면
  paintH1(savedUsername);
}