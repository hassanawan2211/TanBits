let tasks = [];
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
addTaskButton.addEventListener("click", function() {
    const newTask = newTaskInput.value;
    tasks.push(newTask);
    newTaskInput.value = "";

    updateTaskList();
});

function updateTaskList() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement("li");
        const taskText = document.createTextNode(tasks[i]);
        listItem.appendChild(taskText);
        const deleteButton = document.createElement("button");
        const deleteButtonText = document.createTextNode("Delete");
        deleteButton.appendChild(deleteButtonText);
        deleteButton.addEventListener("click", function() {
            tasks.splice(i, 1);
            updateTaskList();
        });
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }
}