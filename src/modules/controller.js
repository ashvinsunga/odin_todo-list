import { formatDate } from "./dateUtil";

import { addTodoToProject } from "./views/modalView";
import { renderProjectList } from "./views/projectView";
import { renderTodos } from "./views/todoView";

import { Project } from "./models/projectModel";
import { TodoList } from './models/todoModel'
import { saveData } from "./models/storageModel";


export const app = (() => {
    const projectCollection = [];
    const showProjects = () => projectCollection;

    const addProject = (project) => {
        projectCollection.push(project)
    }
    return {
        showProjects,
        addProject,
        projectCollection,
    }
})();


function handleAddTodoButtonClick(){
    const addTodoButton = document.querySelector('[new-task-btn]')

    addTodoButton.addEventListener('click', () =>  addTodoToProject())
}


// function handleEditButtonClick() {
//     openTodoDetailsDialog(todo);
  
//     const form = document.querySelector('[todo-form]');
//     form.addEventListener('submit', (event) => {
//       event.preventDefault();
//       updateTodoDetails(todo);
//       const dialog = document.querySelector('[todo-dialog]');
//       if (dialog) {
//         dialog.close();
//       }
//     });
//   }


export function initialise() {
// Dummy data
const projectOne = new Project('FIRST PROJECT');
const projectTwo = new Project('SECOND PROJECT')
const projectThree = new Project('THREE PROJECT')

const todoOne = new TodoList("Table", "Clean clutter on the table", formatDate(new Date(2014, 1, 11)), "moderate", "need to finish this before end of the year",
["Remove laptop", "Position consoles", "Wipe Jerbaks", "Flip tables"]
)
const todoTwo = new TodoList("Floor", "Clean floir clutter", formatDate(new Date(2025, 1, 11)), "high", "need to finish this after the year",
["Remove stains", "Position chairs", "Wipe Wiwi", "Flip enemies"]
)
const todoThree = new TodoList("Kisame", "Clean kisame plywood", formatDate(new Date(2026, 2, 22)), "low", "need to finish this next year",
["Remove plywood", "Position hardieflex", "Wipe tae", "Flip yourself"]
)

projectOne.addTodo(todoTwo)

projectThree.addTodo(todoOne);
projectThree.addTodo(todoThree);

app.addProject(projectOne)
app.addProject(projectThree)

renderProjectList(app.showProjects())
renderTodos(projectOne)
handleAddTodoButtonClick()
}