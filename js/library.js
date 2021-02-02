"use strict";
const books = document.getElementById("books");

(async function start() {
  const res = await fetch(
    "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list"
  );
  const results = await res.json();
  console.log(results);

  results.forEach((item) => {
    books.innerHTML += render(item);
  });
})();

function render(item) {
  return `<tr><td><strong id="counter"></td><td>${item.isbn}</td><td>${item.title}</td><td>${item.overdueFee}</td><td>${item.publisher}</td><td>${item.datePublished}</td><td><a href="editbook.html">Edit</a></td><td><a href="">Delete</a></td></tr>`;
}
