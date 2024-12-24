import { app } from "../controller";
import { createInputWithLabel, createPriorityOption } from "./modalView";
import { formatDate } from "../dateUtil";
import { openTodoDetailsDialog } from "./modalView";

// RENDER THE TODOS ON THE RIGHT PANE //

export function renderTodos(project) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML ="";
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
        todoItemDueDate.textContent = `Due on: ${formatDate(todo.dueDate)}`;

        // controls
        const todoItemControls = document.createElement('div')
        todoItemControls.classList.add('todo-item-controls');

        const editBtn = document.createElement('div')
        editBtn.setAttribute('todo-item-edit-btn',"")
        editBtn.classList.add('todo-item-edit-btn')
        editBtn.addEventListener('click', () => openTodoDetailsDialog(todo))

    
        const deleteBtn = document.createElement('div')
        deleteBtn.setAttribute('todo-item-delete-btn',"")
        deleteBtn.classList.add('todo-item-delete-btn')
        deleteBtn.addEventListener('click', () => alert("Delete Button"))

        todoItemControls.appendChild(editBtn)
        todoItemControls.appendChild(deleteBtn)


        todoItemInformation.appendChild(todoItemTitle)
        todoItemInformation.appendChild(todoItemDueDate);

        todoItem.appendChild(todoItemInformation);
        todoItem.appendChild(todoItemControls)
        todoList.appendChild(todoItem)
    })
}

// CREATE PROJECT SELECTION ELEMENT //

  function createProjectSelect() {
    const label = document.createElement('label');
    label.textContent = 'Project';
    const select = document.createElement('select');
    select.setAttribute('project-list-select',"");
    select.classList.add('project-list-select');
    label.appendChild(select);
  
    const allProjects = app.showProjects();
    allProjects.forEach(project => {
      const option = document.createElement('option');
      option.value = project.name;
      option.textContent = project.name;
      select.appendChild(option);
    });
  
    return label;
  }

// CREATE FORM FOR TODO //

export function createToDoForm() {
    const form = document.createElement('form');
    form.setAttribute('todo-form',"")
    form.classList.add('todo-form');
  
    const titleField = createInputWithLabel('Title', 'text', 'todo-title-input', true);
    form.appendChild(titleField);

    const descriptionField = createInputWithLabel('Description', 'text', 'todo-description-input', true, true);
    form.appendChild(descriptionField);
    
    const dueDateField = createInputWithLabel('Date', 'date', 'todo-duedate-input', true);
    form.appendChild(dueDateField);

    const notesField = createInputWithLabel('Notes', 'text', 'todo-notes-input', false, true);
    form.appendChild(notesField);
  
  
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('todo-priority-select',"")
    prioritySelect.setAttribute('required',"")
    prioritySelect.classList.add('todo-priority-select');
    priorityLabel.appendChild(prioritySelect);
    form.appendChild(priorityLabel);
  
    const noPriority = createPriorityOption('');
    prioritySelect.appendChild(noPriority);
  
    const lowPriority = createPriorityOption('Low');
    prioritySelect.appendChild(lowPriority);
  
    const medPriority = createPriorityOption('Medium');
    prioritySelect.appendChild(medPriority);
  
    const highPriority = createPriorityOption('High');
    prioritySelect.appendChild(highPriority);
  
    const projectLabel = createProjectSelect();
    form.appendChild(projectLabel);
  
    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'SAVE';
    submitBtn.classList.add('todo-submit-btn');
    submitBtn.setAttribute('todo-submit-btn',"");
    form.appendChild(submitBtn);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const dialog = document.querySelector('[todo-dialog]');
      if (dialog) {
        dialog.close();
      }
    });
  
    return form;
  }