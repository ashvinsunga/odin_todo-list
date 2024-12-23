export class Project {
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