export function saveData(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }
  
  export function loadData() {
    const storedData = localStorage.getItem("projects");
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  }
  
  export function removeData() {
    localStorage.removeItem("projects");
  }
  
  export function checkDataExists() {
    return localStorage.getItem("projects") !== null;
  }
  