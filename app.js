
    const randNum1 = Math.floor(Math.random() * 20 + 1);
    const randNum2 = Math.floor(Math.random() * 20 + 1);

    const capchaLabel = document.querySelector("label[for=capcha]");
    capchaLabel.textContent += ` ${randNum1} + ${randNum2}`;
    const capchaInput = document.getElementById("capcha");
    capchaInput.placeholder = ` ${randNum1} + ${randNum2} =`;

    const notification = document.querySelector("div.notification");

    function addNotification(type) {
        notification.classList.replace("nodisplay", "display");
        notification.classList.add(type);
        notification.addEventListener("click", () => notification.classList
            .replace("display", "nodisplay")
        );
    }

    document.forms.addBook.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = e.target.elements.name.value;
        const author = e.target.elements.author.value;
        const capcha = Number(e.target.elements.capcha.value);

        const book = {
            name: name,
            author: author,
        };

        if (capcha === randNum1 + randNum2) {
            fetch("https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(book),
            }
        )
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

