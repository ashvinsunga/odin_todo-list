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