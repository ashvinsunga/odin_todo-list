export function renderTodos(project) {
    const todoList = document.getElementById('todo-list');
    const todos = project.todos
    // console.log(project)
    todos.map(todo => {
        const todoItem = document.createElement('li')
        todoItem.setAttribute('todoItem',"")
        const todoItemTitle = document.createElement('h3')
        todoItemTitle.setAttribute('todoItemTitle',"")
        const todoItemDueDate = document.createElement('p')
        todoItemDueDate.setAttribute('todoItemDueDate',"")
        todoItemTitle.textContent = todo.title;
        todoItemDueDate.textContent = `Due on: ${todo.dueDate}`;
        todoItem.appendChild(todoItemTitle)
        todoItem.appendChild(todoItemDueDate)
        todoList.appendChild(todoItem);
    })
}