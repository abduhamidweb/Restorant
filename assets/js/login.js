formcontr.addEventListener("submit",async (e) => {
    e.preventDefault();
    // let email = document.querySelector("#email");
  try {
      const response = await fetch('http://localhost:5000/api/register/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              useremail: email.value,
              userpassword: password.value
          })
      });

      const {token} = await response.json();
      if (token) {
          localStorage.setItem("token", token);
          location = "admin.html";
      }
      
  } catch (error) {
      console.error(error);
  }
});

async function registerUser() {
  
}

registerUser();
