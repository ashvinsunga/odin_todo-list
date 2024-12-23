 
export function renderProjectList(projects){
    const projectList = document.getElementById('project-list')

    projects.map(project => {
        const projectItem = document.createElement('li')
        projectItem.setAttribute('projectItem',"")
        projectItem.textContent = project.name
        projectList.appendChild(projectItem);
    })

}