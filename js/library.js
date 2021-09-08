"use strict";
const books = document.getElementById("books");

(async function start() {
  //fetch book list
  const res = await fetch(
    "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list"
  );
  const results = await res.json();
  console.log(results);

  results.forEach((item) => {
    books.innerHTML += render(item);
  });
})();

//display book list
function render(item) {
  return `<tr><td><strong id="counter"></td><td>${item.isbn}</td><td>${item.title}</td><td>${item.overdueFee}</td><td>${item.publisher}</td><td>${item.datePublished}</td><td><a href="editbook.html?bookId=${item.bookId}" class="nounderline" id="${item.bookId}">Edit</a></td><td><a class="nounderline" id="${item.bookId}" href="javascript:;" onclick="deleteBook(this.id)">Delete</a></td></tr>`;
}
