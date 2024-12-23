export function renderTodos(project) {
    const todoList = document.getElementById('todo-list');
    const todos = project.todos
    // console.log(project)
    todos.map(todo => {
        const todoItem = document.createElement('li')
        todoItem.classList.add('todo-item')

        const todoItemInformation = document.createElement('div')
        todoItemInformation.setAttribute('todo-item-information',"")

        // title
        const todoItemTitle = document.createElement('h3')
        todoItemTitle.classList.add('todo-item-title')
        todoItemTitle.textContent = todo.title;

        // due date
        const todoItemDueDate = document.createElement('p')
        todoItemDueDate.classList.add('todo-item-duedate')
        todoItemDueDate.textContent = `Due on: ${todo.dueDate}`;

        // controls
        const todoItemControls = document.createElement('div')
        todoItemControls.classList.add('todo-item-controls');

        const editBtn = document.createElement('div')
        editBtn.classList.add('todo-item-edit-btn')

    
        const deleteBtn = document.createElement('div')
        deleteBtn.classList.add('todo-item-delete-btn')

        todoItemControls.appendChild(editBtn)
        todoItemControls.appendChild(deleteBtn)


        todoItemInformation.appendChild(todoItemTitle)
        todoItemInformation.appendChild(todoItemDueDate);

        todoItem.appendChild(todoItemInformation);
        todoItem.appendChild(todoItemControls)
        todoList.appendChild(todoItem)
    })
}