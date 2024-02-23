const todoList = document.getElementById('todo-list');
        const todoInput = document.getElementById('todo-input');

        function addTodo() {
            const todoText = todoInput.value.trim();

            if (todoText !== '') {
                const listItem = document.createElement('li');
                listItem.className = 'todo-item';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                const taskText = document.createElement('span');
                taskText.textContent = todoText;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'delete-button';
                deleteButton.addEventListener('click', () => deleteTodoItem(listItem));

                listItem.appendChild(checkbox);
                listItem.appendChild(taskText);
                listItem.appendChild(deleteButton);

                todoList.appendChild(listItem);

                todoInput.value = '';
            }
        }

        function deleteTodoItem(item) {
            todoList.removeChild(item);
        }

        function goToMainPage() {
            // Replace this with the URL of your main page
            window.location.href = 'index.html';
        }