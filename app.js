document.getElementById('add-task').addEventListener('click', () => {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('task-due-date').value;

    if (title) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <p>Due: ${dueDate}</p>
            <button class="task-btn" onclick="markCompleted(this)">Mark as Completed</button>
            <button class="task-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
      
        document.getElementById('task-title').value = '';
        document.getElementById('task-desc').value = '';
        document.getElementById('task-due-date').value = '';
    }
});

function markCompleted(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
