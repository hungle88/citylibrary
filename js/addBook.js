// https://elibraryrestapi.herokuapp.com/elibrary/api/book/add
// "isbn": document.getElementById("inputISBN").value,
// "title": document.getElementById("inputTitle").value,
// "overdueFee": document.getElementById("inputOverdue").value,
// "publisher": document.getElementById("inputPublisher").value,
// "datePublished": document.getElementById("inputPubDate").value,

async function addBook() {
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
  // location.reload();
}



async function deleteBook(id) {
  const response = await fetch(
    `https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  alert("Book was deleted!")
  location.reload();
}
