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

const addButton = document.querySelector('.add-items')
const removeButton = document.querySelector('.remove-all')
const booksContainer = document.querySelector('#cards-container')

let library = [];1

function Book(title, author, pages, isRead) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.isRead = isRead;
 }

 function addToLibrary() {
  addButton.addEventListener('click', () => {
    library.push(new Book(prompt(''),prompt(''),prompt(''),prompt('true of false')))
   })
 }
addToLibrary()
console.log(library)
