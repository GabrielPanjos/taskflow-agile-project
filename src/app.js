const tasks = [];

function createTask(title) {
  if (!title || title.trim() === "") {
    return null;
  }

  return {
    id: Date.now(),
    title,
    done: false,
  };
}

function addTask() {
  const input = document.getElementById("taskInput");

  const task = createTask(input.value);

  if (!task) {
    alert("Digite uma tarefa válida");
    return;
  }

  tasks.push(task);

  renderTasks();

  input.value = "";
}

function renderTasks() {
  const taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task.title}</span>
      <button onclick="deleteTask(${task.id})">
        ❌
      </button>
    `;

    taskList.appendChild(li);
  });
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index !== -1) {
    tasks.splice(index, 1);
    renderTasks();
  }
}
