export class TodoList {
    priorityList = ["high", "moderate", "low"];
    isCompleted = false;
    constructor(title, description, dueDate, priority, notes, checkList){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checkList = checkList;
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