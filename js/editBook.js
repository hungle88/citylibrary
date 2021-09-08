let id = location.search.split("?bookId=").slice(1);

window.onload= async function start() {
  const addForm = document.getElementById("addForm");
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    editBook(e);
  });
  
  // fetch the selected book
  const res = await fetch(
    "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list"
  );
  const results = await res.json();

  for (let i = 0; i < results.length; i++) {
    if (results[i].bookId == id) {
      console.log(results[i]);
      document.getElementById("inputISBN").value = results[i].isbn;
      document.getElementById("inputTitle").value = results[i].title;
      document.getElementById("inputOverdue").value = results[i].overdueFee;
      document.getElementById("inputPublisher").value = results[i].publisher;
      document.getElementById("inputPubDate").value = results[i].datePublished;
    }
  }

 
};

//edit the selected book
async function editBook(key) {
  key = id;
  const response = await fetch(
    `https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${key}`,
    {
      method: "PUT",
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
  alert("Book's info was updated")
}
