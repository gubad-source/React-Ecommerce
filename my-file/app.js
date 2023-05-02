// var randomColor = Math.floor(Math.random() * 16777215).toString(16);
// console.log(randomColor);
// const num = 12;
// for (let i = 0; i < 12; i++) {
//   let div = document.createElement("div");
//   div.style.width = "30px";
//   div.style.height = "30px";
//   div.style.backgroundColor = "#" + randomColor;
//   div.innerHTML = "ok";

//   // document.querySelector(".color").innerHTML = div;
// }

function signIn() {
  let firstname = document.querySelector("#firstname").value;
  let lastname = document.querySelector("#lastname").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let repeatPassword = document.querySelector("#repeat-password").value;
  let checkbox = document.querySelector("#checkbox");

  if (checkbox.checked == true && password == repeatPassword) {
    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));
  }
}
