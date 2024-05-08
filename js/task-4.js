const formLogin = document.querySelector(".login-form");
const inputEmail = document.querySelector("input[name='email']");
const inputPassword = document.querySelector("input[name='password']");

formLogin.addEventListener("submit", (event) => {
event.preventDefault();
const elements = formLogin.elements;
  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const { email, password } = elements;
    const loginInfo = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(loginInfo);
    formLogin.reset();
  }
});