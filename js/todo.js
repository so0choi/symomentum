const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

const TODOS_KEY = "todos";

const deleteTodo = (event) => {
  const liToDelete = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== liToDelete.id);

  liToDelete.remove();
  saveTodos();
};

const createNewTodoSpan = (newTodoTask) => {
  const todoSpan = document.createElement("span");
  todoSpan.innerText = newTodoTask;
  return todoSpan;
};

const createTodoDelBtn = () => {
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  return delBtn;
};

const createNewTodoLiElement = (newTodoTask) => {
  const li = document.createElement("li");
  const { id, task } = newTodoTask;
  li.id = id;
  li.appendChild(createNewTodoSpan(task));
  li.appendChild(createTodoDelBtn());
  return li;
};

const paintTodo = (newTodoTask) => {
  const newTodoLiElement = createNewTodoLiElement(newTodoTask);
  todoList.appendChild(newTodoLiElement);
};

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const createNewTodoObj = (newTodoTask) => {
  return {
    task: newTodoTaskInput,
    id: String(new Date().getTime()),
  };
};

const handleTodoSubmit = (event) => {
  event.preventDefault();
  const newTodoTaskInput = todoInput.value;
  todoInput.value = "";

  const newTodoObj = createNewTodoObj(newTodoTaskInput);
  todos.push(newTodoObj);
  saveTodos();
  paintTodo(newTodoObj);
};

const init = () => {
  const savedTodos = localStorage.getItem(TODOS_KEY);
  if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach((todo) => paintTodo(todo));
  }

  todoForm.addEventListener("submit", handleTodoSubmit);
};

init();
