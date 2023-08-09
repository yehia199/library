 // set the deafault theme to light
document.documentElement.className = 'light'
function setTheme() {
  let root = document.documentElement;
  let newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  let themeName = document.querySelector('.theme-name');
  let themeNameChanger = newTheme === 'dark' ? themeName.textContent = 'light' : themeName.textContent = 'dark'; 
  themeName.textContent = themeNameChanger;
}
let themeButton = document.querySelector('.theme-switcher');
themeButton.addEventListener('click', setTheme);
