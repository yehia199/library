 // set the deafault theme to light
document.documentElement.className = 'light'
function setTheme() {
  let root = document.documentElement;
  let newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  let themeName = document.querySelector('.theme-name');
  themeName.textContent = newTheme;
}
let themeButton = document.querySelector('.theme-switcher');
themeButton.addEventListener('click', setTheme);

const addButton = document.querySelector('.add-items')
const removeButton = document.querySelector('.remove-all')
const booksContainer = document.querySelector('#cards-container')
const dialoge = document.querySelector('#form-dialog')
let library = [];

function Book(title, author, pages, isRead) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.isRead = isRead;
 }

 addButton.addEventListener('click', ()=>{
   dialoge.showModal()
 })
 
addToLibrary()
console.log(library)
