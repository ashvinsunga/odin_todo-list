import { TodoList, updateTodoDetails } from "../models/todoModel";
import { createToDoForm, renderTodos } from "./todoView";
import { app } from "../controller";
import { saveData } from "../models/storageModel";
import { parse } from "date-fns";


// MODAL BLUR BACKGROUND //

function addBlur() {
    const container = document.querySelector('[container]');
    container.classList.add('blurred-background');
  }

function removeBlur() {
    const mainContent = document.querySelector('[container]');
    mainContent.classList.remove('blurred-background');
  }


  // OPEN TODO MODAL //

  export function addTodoToProject() {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('todo-dialog',"");
    dialog.classList.add('todo-dialog');

    const closeIcon = document.createElement('div')
    closeIcon.classList.add('close-icon')
    closeIcon.addEventListener('click', () => {
        dialog.close()
    })

    dialog.appendChild(closeIcon)

    const toDoForm = createToDoForm();

    const currentProjectTitle = document.querySelector('[project-title-text]').textContent;
    const projectSelectInput = toDoForm.querySelector('[project-list-select]');
    if (projectSelectInput) {
        projectSelectInput.value = currentProjectTitle;
    }

    toDoForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const title = toDoForm.querySelector('[todo-title-input]').value;
        const description = toDoForm.querySelector('[todo-description-input]').value;
        const dueDate = toDoForm.querySelector('[todo-dueDate-input]').value;
        const notes = toDoForm.querySelector('[todo-notes-input]').value;
        const priority = toDoForm.querySelector('[todo-priority-select]').value;
        const projectName = toDoForm.querySelector('[project-list-select]').value;
        
        const newTodo = new TodoList(title, description, dueDate, priority, notes, projectName);
        
        const selectedList = app.showProjects().find(project => project.name === projectName);
        
        selectedList.addTodo(newTodo)
        renderTodos(selectedList)
        
        saveData(app.showProjects());
    
        toDoForm.reset();
    
      });


    dialog.appendChild(toDoForm);
    document.body.appendChild(dialog);

    dialog.showModal();
    dialog.classList.add('show');

    addBlur();

    dialog.addEventListener('close', () => {
        document.body.removeChild(dialog);
        removeBlur();
    });

  }

  // PREVIOUSLY PLACED ON TODO VIEW //

  export function createInputWithLabel(text, inputType, inputClass, isRequired = false, isTextArea = false) {
    const label = document.createElement('label');
    label.textContent = text;
    
    let input;
    if (isTextArea) {
      input = document.createElement('textarea');
      input.rows = 3; 
      input.cols = 20;
    } else {
      input = document.createElement('input');
      input.type = inputType;
    }
    
    input.classList.add(inputClass);
    input.setAttribute(inputClass,"")
    if (isRequired) {
      input.setAttribute('required', '');
    }
    label.appendChild(input);
    
    return label;
  }

  export function createPriorityOption(value) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    return option;
  }


  // UPDATE TODO MODAL //

  export function openTodoDetailsDialog(todo) {
    const dialog = document.createElement('dialog');
    dialog.classList.add('todo-dialog');

    const formContainer = document.createElement('div');
    formContainer.setAttribute('todo-form-container',"");
    formContainer.classList.add('todo-form-container');

    const closeIcon = document.createElement('div');
    closeIcon.classList.add('close-icon');
    closeIcon.addEventListener('click', () => {
        dialog.close();
      });

    dialog.appendChild(closeIcon);

    const toDoForm = createToDoForm();
    formContainer.appendChild(toDoForm);

    const title = formContainer.querySelector('[todo-title-input]');
    const description = formContainer.querySelector('[todo-description-input]');
    const dueDate = formContainer.querySelector('[todo-dueDate-input]');
    const notes = formContainer.querySelector('[todo-notes-input]');
    const priority = formContainer.querySelector('[todo-priority-select]');
    const projectName = formContainer.querySelector('[project-list-select]');


    title.value = todo.title
    description.value = todo.description
    dueDate.value = todo.dueDate
    notes.value = todo.notes
    priority.value = todo.priority
    projectName.value = todo.projectName

    const submitBtn = formContainer.querySelector('[todo-submit-btn]')
    submitBtn.value = 'SAVE Changes'
    submitBtn.addEventListener('click', () => {
        updateTodoDetails(todo)
  })

    dialog.appendChild(formContainer);
  
    document.body.appendChild(dialog);
    
    dialog.showModal();
    dialog.classList.add('show');
  
    addBlur();

    dialog.addEventListener('close', () => {
        document.body.removeChild(dialog);
        removeBlur();
      });
  }
