const bookId = document.location.search.slice(1);

fetch(
  `https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books/${bookId}`
)
  .then((res) => res.json())
  .then((data) => {
    const h1 = document.querySelector("h1");
    h1.textContent = data.name;
    const h3 = document.querySelector("h3");
    h3.textContent = data.author;
  });