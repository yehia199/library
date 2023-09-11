// set the deafault theme to light
document.documentElement.className = "light";
function setTheme() {
  let root = document.documentElement;
  let newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;
  let themeName = document.querySelector(".theme-name");
  themeName.textContent = newTheme;
}
let themeButton = document.querySelector(".theme-switcher");
themeButton.addEventListener("click", setTheme);

const addButton = document.querySelector(".add-items");
const removeButton = document.querySelector(".remove-all");
const booksContainer = document.querySelector("#cards-container");
const dialoge = document.querySelector("#form-dialog");
const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const submitBtn = document.querySelector("#submit");

console.log(titleInput);
console.log(submitBtn);
console.log(dialoge);
var library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

addButton.addEventListener("click", () => {
  dialoge.showModal();
});

submitBtn.addEventListener("click", addToLibrary);

function addToLibrary(e) {
  let newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked,
  );
  library.push(newBook);
  e.preventDefault();
  dialoge.close();
  let book = document.createElement("div");
  booksContainer.append(book);
  book.setAttribute("id", `${library.length}`);
  book.setAttribute("class", "book");
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let read = document.createElement("button");
  let remove = document.createElement("button");
  remove.className = "remove";
  read.setAttribute("id", "read-btn");
  book.append(title);
  book.append(author);
  book.append(pages);
  book.append(read);
  book.append(remove);
  title.textContent = newBook.title;
  author.textContent = newBook.author;
  pages.textContent = newBook.pages;
  read.textContent = newBook.isRead;
  remove.textContent = "remove";
  console.log(book);
  console.log(library[library.length - 1]);
  read.className = `${newBook.isRead}`;
  read.addEventListener("click", () => {
    newBook.isRead = !newBook.isRead;
    if (newBook.isRead === true) {
      read.className = "true";
      read.textContent = "true";
    } else {
      read.className = "false";
      read.textContent = "false";
    }
  });
  remove.addEventListener("click", removeBook);
}
function removeBook(event) {
  parent = event.target.parentNode;
  library.splice(parent, 1);
  parent.remove()
  console.log(parent)
  console.log(library)
}
console.log(library);
