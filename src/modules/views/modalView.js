function addBlur() {
    const container = document.querySelector('[container]');
    container.classList.add('blurred-background');
  }

function removeBlur() {
    const mainContent = document.querySelector('[container]');
    mainContent.classList.remove('blurred-background');
  }