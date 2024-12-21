import {format} from 'date-fns'

const ToDo = (() => {
    let projects = [];

    const anyProjectPresent = () => {
        return projects.length > 0 ? true : false;
    }

    const showProjects = () => {
        return projects;
    }

    const addProject = (project) => {
        projects.push(project)
        return showProjects()
    }

    return {
        anyProjectPresent,
        showProjects,
        addProject
    }
})();



class Project {
    todos = [];
    constructor(name) {
        this.name = name;
    }
    addTodo(todoList){
        this.todos.push(todoList)
        return true
    }
    
    removeTodo(todoId) {
        this.todos.splice(todoId,1)
        return true
    }
    
    showTodos =() => this.todos;
}

class todoList {
    priorityList = ["high", "moderate", "low"]
    isCompleted = false;
    constructor(title, description, dueDate, priority, notes, checklist){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }

    addItemToCheckList(itemId){
        this.checklist.push(itemId)
        return true
    }

    removeItemToCheckList(itemId){
        this.checklist.splice(itemId,1)
        return this.checklist
    }

    toggleComplete(){
        return this.isCompleted = !this.isCompleted
    }

    showDetailPreview(){
        return `${this.title}-${this.dueDate}`
    }

    setDetailPriority(priority) {
        return this.priority = priority
    }

    showCompleteDetail(){
        return {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            notes: this.notes,
            checklist: this.checklist,
        }
    }
}


const todoOne = new todoList("Table", "Clean clutter on the table", format(new Date(2014, 1, 11), 'MM/dd/yyyy'), "moderate", "need to finish this before end of the year",
["Remove laptop", "Position consoles", "Wipe Jerbaks", "Flip tables"]
)

const todoTwo = new todoList("Floor", "Clean floir clutter", format(new Date(2025, 1, 11), 'MM/dd/yyyy'), "high", "need to finish this after the year",
["Remove stains", "Position chairs", "Wipe Wiwi", "Flip enemies"]
)

const banabaProject = new Project("BANABA Project")

banabaProject.addTodo(todoOne)
banabaProject.addTodo(todoTwo)

console.log(ToDo.addProject(banabaProject))