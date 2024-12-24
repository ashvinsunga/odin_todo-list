import { app } from "../controller";
import { renderTodos } from "../views/todoView";
import { saveData } from "./storageModel";

export class TodoList {
    isCompleted = false;
    constructor(title, description, dueDate, priority, notes, projectName){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.projectName = projectName;
    }

    addItemToCheckList(itemId){
        this.checkList.push(itemId)
        return true
    }

    removeItemToCheckList(itemId){
        this.checkList.splice(itemId,1)
        return this.checkList
    }

    toggleComplete(){
        return this.isCompleted = !this.isCompleted
    }

    setDetailPriority(priority) {
        return this.priority = priority
    }

    showDetailPreview(){
        return `${this.title}-${this.dueDate}`
    }


    showCompleteDetail(){
        return {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            notes: this.notes,
            checkList: this.checkList,
        }
    }
}



export function updateTodoDetails(todo) {
    const formContainer = document.querySelector('.todo-form-container');
  
    const title = formContainer.querySelector('[todo-title-input]');
    const description = formContainer.querySelector('[todo-description-input]');
    const dueDate = formContainer.querySelector('[todo-dueDate-input]');
    const notes = formContainer.querySelector('[todo-notes-input]');
    const priority = formContainer.querySelector('[todo-priority-select]');
    const projectName = formContainer.querySelector('[project-list-select]');
  
    const oldProjectName = todo.projectName;

    todo.title = title.value
    todo.description = description.value
    todo.dueDate = dueDate.value
    todo.notes = notes.value
    todo.priority = priority.value
    todo.projectName = projectName.value
  
    const oldProject = app.projectCollection.find(project => project.name === oldProjectName);
    const newProject = app.projectCollection.find(project => project.name === todo.projectName);

    if (oldProject && oldProjectName !== todo.project) {
        oldProject.projectCollection = oldProject.showTodos().filter(t => t !== todo);
    }

    if (newProject && (!oldProject || !oldProject.showTodos().includes(todo))) {
        newProject.addTodo(todo);
    }

    const currentProjectTitle = document.querySelector('[project-title-text]').textContent;
    if (currentProjectTitle === oldProjectName) {
        renderTodos(oldProject);
    }

    saveData(app.showProjects());
}