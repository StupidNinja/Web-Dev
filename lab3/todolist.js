document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector("#todolist"),
    addTaskButton = document.querySelector("#add-btn"),
    taskInput = document.querySelector(".task-title");

  // Function to create a new task item
  const createTaskItem = () => {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskTitle = document.createElement("p");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAOJJREFUWEftmGsSgjAMhJeb4cmUk+nNlDgyw0BrdiM4FdM/zNA8tl8oNHRobHSN6cHPC+oBnAHYlR3SoiXjUcydVbGwo/PQhi8q16CgC4CB8VUEWakssA0mgWr/DJyCvLKVCM1Re/6fzq9Kn4IWSClCc5/QTinUkY7j7TI6kPMw0XEOI6i2YvX+CmyUkJp495KloKm2W5HIkk1nHZVo7jKPXBL6X0LqSXH391AKKn06VCo1+9PYdN5qk97xw/yi7XMoJyPIAlsLrfxgKIkxKvYaqNJRO9etSvY2DkvoK2KaJPQAdMWUJUak5hoAAAAASUVORK5CYII=";
    deleteIcon.alt = "Delete Task";

    // Append elements to the task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(deleteIcon);

    // Add event listener for the checkbox to toggle strikethrough
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        taskTitle.classList.add("completed");
      } else {
        taskTitle.classList.remove("completed");
      }
    });

    return taskItem;
  };

  // Event listener for adding a new task
  addTaskButton.addEventListener("click", () => {
    const taskTitle = taskInput.value,
      taskItem = createTaskItem();

    // Set the task title
    taskItem.querySelector("p").innerText = taskTitle;

    // Add event listener for the delete icon
    taskItem.querySelector("img").addEventListener("click", function () {
      todoList.removeChild(this.parentNode);
    });

    // Append the new task item to the todo list
    todoList.appendChild(taskItem);
  });
});