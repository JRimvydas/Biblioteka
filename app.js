
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

    const randNum1 = Math.floor(Math.random() * 20 + 1);
    const randNum2 = Math.floor(Math.random() * 20 + 1);

    const capchaLabel = document.querySelector("label[for=capcha]");
    capchaLabel.textContent += ` ${randNum1} + ${randNum2}`;
    const capchaInput = document.getElementById("capcha");
    capchaInput.placeholder = ` ${randNum1} + ${randNum2} =`;

    const notification = document.querySelector("div.notification");

    document.forms.addBook.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = e.target.elements.title.value;
        const author = e.target.elements.author.value;
        const capcha = Number(e.target.elements.capcha.value);

        if (capcha === randNum1 + randNum2) {
        firebase.firestore().collection("books").add({
            title: title,
            author: author,
        })
        .then(() => {
            addNotification("green")
            notification.textContent = "You have been added a book";
        })
        .catch((error)=> {
            addNotification("red")
            notification.textContent = "Please check the captcha";
        });
    
    } else {
            addNotification("red")
            notification.textContent = "Please check the captcha";
        }
    })

    function addNotification(type) {
        notification.classList.replace("nodisplay", "display");
        notification.classList.add(type);
        notification.addEventListener("click", () => notification.classList
            .replace("display", "nodisplay")
        );
    }
