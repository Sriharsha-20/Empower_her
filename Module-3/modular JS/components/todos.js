import { displayTodos } from "./displayTodos.js";

let loggedIn = localStorage.getItem("loggedIn");

if (!loggedIn) {
    alert("Please login first.");
    window.location.href = "login.html";
}

async function fetchTodos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    let first20 = data.slice(0, 20);

    displayTodos(first20);
}

fetchTodos();
