 
export function renderProjectList(projects){
    const projectList = document.getElementById('project-list')
    projectList.innerHTML = "";

    projects.map(project => {
        const projectItem = document.createElement('li')
        projectItem.classList.add('project-item')
        projectItem.textContent = project.name
        projectList.appendChild(projectItem);
    })

}


export function createProjectForm() {
    const form = document.createElement('form');
    form.setAttribute('project-form',"")
    form.classList.add('project-form');
  
    const titleField = createInputWithLabel('Title', 'text', 'project-title-input', true, false);
    form.appendChild(titleField);
  
    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'SAVE';
    submitBtn.classList.add('project-submit-btn');
    form.appendChild(submitBtn);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const dialog = document.querySelector('[todo-dialog]');
      if (dialog) {
        dialog.close();
      }
    });
  
    return form;
  }