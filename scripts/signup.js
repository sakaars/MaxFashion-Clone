
//   Registering user
document.querySelector("form").addEventListener("submit", Register);
async function Register(event){
  event.preventDefault()
  try {
    let register_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("num").value,
      password: document.getElementById("pass").value,
    };
    register_data = JSON.stringify(register_data);
console.log({regiseter : register_data});
    let res = await fetch(
      "https://max-fashion-backend.herokuapp.com/register",
      {
        method: "POST",
        body: register_data,

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

      console.log("res" , res);

  
    window.location.href = "login.html";
  } catch (err) {
    alert(err.message)
    console.log(err.message);
  }
};




let showuser = document.getElementById("showuser");
function showUser(data) {
  let user = "Username:" + " " + data;
  if (data != undefined) {
    showuser.textContent = null;
    showuser.append(user);
  }
}
// container.append(user)
