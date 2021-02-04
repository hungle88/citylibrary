// https://elibraryrestapi.herokuapp.com/elibrary/api/book/add
// "isbn": document.getElementById("inputISBN").value,
// "title": document.getElementById("inputTitle").value,
// "overdueFee": document.getElementById("inputOverdue").value,
// "publisher": document.getElementById("inputPublisher").value,
// "datePublished": document.getElementById("inputPubDate").value,

window.onload = function () {
  const addForm = document.getElementById("addForm");
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addBook(e);
  });
};

async function addBook(event) {
  const response = await fetch(
    "https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isbn: document.getElementById("inputISBN").value,
        title: document.getElementById("inputTitle").value,
        overdueFee: document.getElementById("inputOverdue").value,
        publisher: document.getElementById("inputPublisher").value,
        datePublished: document.getElementById("inputPubDate").value,
      }),
    }
  );
  document.getElementById("inputISBN").value = "";
  document.getElementById("inputTitle").value = "";
  document.getElementById("inputOverdue").value = "";
  document.getElementById("inputPublisher").value = "";
  document.getElementById("inputPubDate").value = "";
  alert("Book was added");
}

async function deleteBook(id) {
  let result = confirm("This book will be removed. Do you want to continue?");
  if (result) {
    const response = await fetch(
      `https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("Book was deleted!");
    location.reload();
  }
}
