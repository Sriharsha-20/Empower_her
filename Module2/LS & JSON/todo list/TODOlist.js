// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchBar = document.getElementById("search");

let tasks = []; // Array to store task objects

// ----------------------------------------
// Load tasks from localStorage on page load
// ----------------------------------------
window.addEventListener("load", function() {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        tasks = JSON.parse(storedTasks); // Convert string -> array
        renderTasks(tasks);
    }
});


// ----------------------------------------
// Add Task
// ----------------------------------------
addBtn.addEventListener("click", function() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = {
        id: Date.now(), // Unique ID
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks(tasks);

    taskInput.value = ""; // Clear input
});


// ----------------------------------------
// Save tasks to localStorage
// ----------------------------------------
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// ----------------------------------------
// Render tasks on screen
// ----------------------------------------
function renderTasks(taskArray) {
    taskList.innerHTML = ""; // Clear old list

    taskArray.forEach((task) => {
        const li = document.createElement("li");

        li.textContent = task.text;
        li.className = task.completed ? "completed" : "";

        // Toggle completion on click
        li.addEventListener("click", function() {
            task.completed = !task.completed;
            saveTasks();
            renderTasks(filterTasks(searchBar.value)); // maintain search state
        });

        // Delete Button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.style.marginLeft = "10px";

        delBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // prevent triggering complete toggle
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks(filterTasks(searchBar.value));
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}


// ----------------------------------------
// Search Tasks (real-time)
// ----------------------------------------
searchBar.addEventListener("input", function() {
    const query = searchBar.value.toLowerCase();
    const filtered = filterTasks(query);
    renderTasks(filtered);
});

function filterTasks(query) {
    return tasks.filter(task =>
        task.text.toLowerCase().includes(query)
    );
}