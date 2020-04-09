 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyB1i62gdpVapHtaoIcqv5de7YDR8Z_ZgA4",
  authDomain: "fity-registration.firebaseapp.com",
  databaseURL: "https://fity-registration.firebaseio.com",
  projectId: "fity-registration",
  storageBucket: "fity-registration.appspot.com",
  messagingSenderId: "78830939855",
  appId: "1:78830939855:web:f2d4a3ecd281420f32d1ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

// Spinneris

const spinner = document.createElement("div");
spinner.classList.add("spinner");
const spinnerImg = document.createElement("img");
spinnerImg.src = "spinner.gif";
spinner.append(spinnerImg);
document.body.append(spinner);

// Table Generation
const table = document.querySelector("tbody");


firebase.firestore().collection("books").get()
  .then((snapshot) => snapshot.docs.forEach((doc)=>{
      addToTable(doc.data(), doc.id)
  })
  ).then(() => {
        document.body.removeChild(spinner);
      })
function addToTable(book, id) {
  const tr = table.insertRow();

  const td1 = tr.insertCell();
  td1.textContent = book.title;
  const td2 = tr.insertCell();
  td2.textContent = book.author;

  const td3 = tr.insertCell();
  const button = document.createElement("a");
  button.textContent = "View";
  button.href = `/book.html?${id}`;
  td3.append(button);
}
    
// fetch("https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((item) => {
//       addToTable(item);
//     });
//   })
  