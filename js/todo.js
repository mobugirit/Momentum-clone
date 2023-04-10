const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todo-list");

const TODOS_KEY = "todo-list";

function deleteTodo(event){
  // 여기서 어떤게 지워졌는지알기 위해서 todo마다 id배정 필요
  const li = event.target.parentElement
  todos = todos.filter((item)=>item.id!==parseInt(li.id)); //todos array 수정
  li.remove();
  saveTodos();
}

function paintTodo(item){
  const li = document.createElement("li");
  li.id = item.id; //li를 나중에 제거하기 위해 todo의 id 부여
  const span = document.createElement("span");
  span.innerText = item.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click",deleteTodo); //버튼 눌리면 todo삭제
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function onTodoSubmit(event){
  event.preventDefault();
  const todo = {};
  todo.text = todoInput.value;
  todo.id = Date.now();  // 랜덤아이디
  todoInput.value="";
  todos.push(todo);
  saveTodos(); //array 수정을 localStorage에 반영
  paintTodo(todo); //array 수정을 화면에 반영
}

let todos = [];  // 1.데이터베이스 array 생성
const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null){
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  todos.forEach(paintTodo);
}

todoForm.addEventListener("submit",onTodoSubmit);