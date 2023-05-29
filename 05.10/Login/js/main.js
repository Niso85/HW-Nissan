const DOM = document.querySelector("main");
const Container = document.createElement("div");
Container.className = "login-container"
const InputUsername = document.createElement("input");
InputUsername.className = "username"
InputUsername.type = "text";
InputUsername.placeholder = "Username";
const InputPassword = document.createElement("input");
InputUsername.className = "password"
InputPassword.type = "password";
InputPassword.placeholder = "Password";
const SubmitButton = document.createElement("button");
SubmitButton.innerText = "Submit";
SubmitButton.addEventListener("click", submit);

DOM.append(Container);
Container.append(InputUsername, InputPassword, SubmitButton);

const Users = [
  {
    firstName: "Nissan",
    username: "nissan123",
    password: "nissan123",
  },
  {
    firstName: "Mendy",
    username: "mendy123",
    password: "mendy123",
  },
  {
    firstName: "Moshe",
    username: "moshe123",
    password: "moshe123",
  },
];

function submit() {
  const Username = InputUsername.value;
  const Password = InputPassword.value;
  let firstName = null;

  Users.forEach(chechUser);
  if (firstName) {
    Container.innerText = "";

    const H1 = document.createElement("h1");
    H1.innerText = "Welcom " + firstName;
    Container.append(H1);
  } else {
    alert("incorrect details. please try again...");
  }
  InputUsername.value = "";
  InputPassword.value = "";

  function chechUser(user) {
    if (user.username === Username && user.password === Password) {
        firstName = user.firstName;
    }
  }
}
