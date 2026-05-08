const { createTask } = require("../src/app");

test("deve criar uma tarefa válida", () => {
  const task = createTask("Estudar JavaScript");

  expect(task.title).toBe("Estudar JavaScript");
});

test("não deve criar tarefa vazia", () => {
  const task = createTask("");

  expect(task).toBeNull();
});