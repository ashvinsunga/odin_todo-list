import { format } from "date-fns";

import { Project } from "./models/projectModel";
import { TodoList } from './models/todoModel'

import { renderProjectList } from "./views/projectView";
import { renderTodos } from "./views/todoView";



const app = (() => {
    const projectCollection = [];

    const showProjects = () => projectCollection;

    const addProject = (project) => {
        projectCollection.push(project)
    }

    return {
        showProjects,
        addProject
    }
})();



export function initialise() {
// Dummy data
const projectOne = new Project('FIRST PROJECT');
const projectTwo = new Project('SECOND PROJECT')
const projectThree = new Project('THREE PROJECT')

const todoOne = new TodoList("Table", "Clean clutter on the table", format(new Date(2014, 1, 11), 'MM/dd/yyyy'), "moderate", "need to finish this before end of the year",
["Remove laptop", "Position consoles", "Wipe Jerbaks", "Flip tables"]
)

const todoTwo = new TodoList("Floor", "Clean floir clutter", format(new Date(2025, 1, 11), 'MM/dd/yyyy'), "high", "need to finish this after the year",
["Remove stains", "Position chairs", "Wipe Wiwi", "Flip enemies"]
)

const todoThree = new TodoList("Kisame", "Clean kisame plywood", format(new Date(2026, 2, 22), 'MM/dd/yyyy'), "low", "need to finish this next year",
["Remove plywood", "Position hardieflex", "Wipe tae", "Flip yourself"]
)

projectOne.addTodo(todoTwo)
projectThree.addTodo(todoOne);
projectThree.addTodo(todoThree);

app.addProject(projectOne)
app.addProject(projectTwo)
app.addProject(projectThree)
renderProjectList(app.showProjects())
renderTodos(projectThree)

}