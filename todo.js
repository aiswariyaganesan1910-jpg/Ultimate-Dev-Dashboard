let tasks = [];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");
const progress = document.getElementById("progress");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    renderTasks();
}

function renderTasks() {
    todoList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span 
                style="cursor:pointer; ${
                    task.completed ? "text-decoration: line-through; color: green;" : ""
                }"
                onclick="toggleTask(${task.id})">
                ${task.completed ? "☑️" : "☐"} ${task.text}
            </span>
            
            <button onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;

        todoList.appendChild(li);
    });

    updateProgress();
}

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });

    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    renderTasks();
}

function updateProgress() {
    const completedTasks = tasks.filter(task => task.completed).length;

    progress.textContent =
        `Completed: ${completedTasks}/${tasks.length}`;
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});