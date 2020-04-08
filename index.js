  
// Spinneris

const spinner = document.createElement("div");
spinner.classList.add("spinner");
const spinnerImg = document.createElement("img");
spinnerImg.src = "spinner.gif";
spinner.append(spinnerImg);
document.body.append(spinner);

// Table Generation

const table = document.querySelector("tbody");

function addToTable(book) {
  const tr = table.insertRow();

  const td1 = tr.insertCell();
  td1.textContent = book.name;
  const td2 = tr.insertCell();
  td2.textContent = book.author;

  const td3 = tr.insertCell();
  const button = document.createElement("a");
  button.textContent = "View";
  button.href = `/book.html?${book.id}`
 
  td3.append(button);
}

fetch("https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      addToTable(item);
    });
  })
  .then(() => {
    document.body.removeChild(spinner);
  });