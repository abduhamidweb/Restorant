formcontr.addEventListener("submit", async (e) => {
    e.preventDefault();
    // let email = document.querySelector("#email");
    try {
        const response = await fetch('http://localhost:5000/api/boss/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                useremail: email.value,
                userpassword: password.value
            })
        });
        const {
            token
        } = await response.json();
        console.log(token);
        if (token) {
            localStorage.setItem("tokenbos", token);
            location = "bigboss.html";
        } else {
            alert("please enter your email address");
        }

    } catch (error) {
        console.error(error);
    }
});

async function registerUser() {

}

registerUser();