let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode');

const savedMode = localStorage.getItem('mode');
if (savedMode === 'light') {
  document.documentElement.classList.add('light');
  buttonToggle.querySelector('span').textContent = 'dark mode ativado!';
  darkMode = false;
}

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light');

  const mode = darkMode ? 'light' : 'dark';
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`;

  darkMode = !darkMode;

  // Salva o estado atual no localStorage
  localStorage.setItem('mode', mode);
});