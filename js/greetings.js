const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username-input");
const greetingEl = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "is-hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (e) => {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = usernameInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

const paintGreetings = (username) => {
  greetingEl.innerText = `Hello, ${username}`;
  greetingEl.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem("username");

if (!savedUsername) {
  loginForm.addEventListener("submit", onLoginSubmit);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}
