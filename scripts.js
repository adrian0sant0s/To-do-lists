const inputElement = document.querySelector(".newTaskInput");
const addTaskButton = document.querySelector(".buttonTask");
const tasksContainer = document.querySelector(".taskContainer");

const validateInput = () => inputElement.value.trim().length > 0;

const handleTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("taskItem");

  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement.value;

  taskContent.addEventListener("click", () => handleClick(taskContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");

  deleteItem.addEventListener("click", () =>
    handleDeleteClick(taskItemContainer, taskContent)
  );

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);

  console.log(tasksContainer);
  inputElement.value = "";
};

const handleClick = (taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClick = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClick) {
      task.firstChild.classList.toggle("completed");
    }
  }
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClick = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClick) {
      taskItemContainer.remove();
    }
  }
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};
addTaskButton.addEventListener("click", () => handleTask());

inputElement.addEventListener("change", () => handleInputChange());
