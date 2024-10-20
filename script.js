const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    const li = document.createElement('li');

    // Cria a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    checkbox.addEventListener('change', function() {
        // Marca a tarefa como concluída ao clicar na checkbox
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    // Adiciona o texto da tarefa ao item da lista
    li.appendChild(checkbox);
    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText; // Adiciona o texto da tarefa
    li.appendChild(taskLabel);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.classList.add('delete-button'); // Corrigido para 'delete-button'
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Para evitar que o evento de clique no li seja ativado
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
