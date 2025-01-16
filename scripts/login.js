
// Login part
document.querySelector("form").addEventListener("submit", Login);
async function Login (event) {
  event.preventDefault()
  try {
    let login_data = {
      email: document.getElementById("log-email").value,
      password: document.getElementById("log-pass").value,
    };

    let login_data_json = JSON.stringify(login_data);
    console.log(login_data_json);
    let res = await fetch("https://max-fashion-backend.herokuapp.com/login", {
      method: "POST",

      body: login_data_json,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log("data:", data);
    localStorage.setItem('userName',(data.user.name))
    window.location.href = "index.html";

  } catch (err) {
   console.error(err);
  }
};