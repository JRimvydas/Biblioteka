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

const bookId = document.location.search.slice(1);

firebase.firestore().collection("books").get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      if (bookId === doc.id) {
        const h1 = document.querySelector("h1");
        h1.textContent = doc.data().title;
        const h3 = document.querySelector("h3");
        h3.textContent = doc.data().author;
      }
    });
  });


// fetch(
//   `https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books/${bookId}`
// )
//   .then((res) => res.json())
//   .then((data) => {
//     const h1 = document.querySelector("h1");
//     h1.textContent = data.name;
//     const h3 = document.querySelector("h3");
//     h3.textContent = data.author;
//   });