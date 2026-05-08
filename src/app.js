const tasks = [];

function createTask(title) {
  if (!title || title.trim() === "") {
    return null;
  }

  return {
    id: Date.now(),
    title,
    done: false
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
