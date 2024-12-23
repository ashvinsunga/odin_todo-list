import { TodoList } from "../models/todoModel";
import { createToDoForm } from "./todoView";
import { app } from "../controller";

function addBlur() {
    const container = document.querySelector('[container]');
    container.classList.add('blurred-background');
  }

function removeBlur() {
    const mainContent = document.querySelector('[container]');
    mainContent.classList.remove('blurred-background');
  }

  export function openDialog() {
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
        console.log(selectedList)
        // selectedList?.tasks.push(addTask);
        // renderTaskList(selectedList?.tasks);
    
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