const firstName = document.getElementById(`firstName`);
const lastName = document.getElementById(`lastName`);
const password = document.getElementById(`password`);
const email = document.getElementById(`email`);
const form = document.getElementById(`form`);

let errorFN = document.getElementById(`errorFN`);
let errorLN = document.getElementById(`errorLN`);
let errorEmail = document.getElementById(`errorEmail`);
let errorPassword = document.getElementById(`errorPassword`);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  //first name
  if (firstName.value === ``) {
    errorFN.textContent = "First Name cannot be empty";
    errorFN.style.color = "hsl(0, 100%, 74%)";
    errorFN.style.textAlign = "right";
    firstName.style.borderColor = "hsl(0, 100%, 74%)";
    firstName.style.borderWidth = "2px";
  } else {
    errorFN.textContent = "";
    errorFN.style.color = "black";
    firstName.style.borderColor = "rgb(0, 0, 0, 0.2)";
    firstName.style.borderWidth = "1px";
  }
  //last name
  if (lastName.value === ``) {
    errorLN.textContent = "Last Name cannot be empty";
    errorLN.style.color = "hsl(0, 100%, 74%)";
    errorLN.style.textAlign = "right";
    lastName.style.borderColor = "hsl(0, 100%, 74%)";
    lastName.style.borderWidth = "2px";
  } else {
    errorLN.textContent = "";
    errorLN.style.color = "black";
    lastName.style.borderColor = "rgb(0, 0, 0, 0.2)";
    lastName.style.borderWidth = "1px";
  }
  //email address
  if (
    email.value === `` ||
    !email.value.includes("@") ||
    !email.value.includes(".")
  ) {
    errorEmail.textContent = "Looks like this is not an email";
    errorEmail.style.color = "hsl(0, 100%, 74%)";
    errorEmail.style.textAlign = "right";
    email.style.borderColor = "hsl(0, 100%, 74%)";
    email.style.borderWidth = "2px";
  } else {
    errorEmail.textContent = "";
    errorEmail.style.color = "black";
    email.style.borderColor = "rgb(0, 0, 0, 0.2)";
    email.style.borderWidth = "1px";
  }
  //password
  if (password.value === ``) {
    errorPassword.textContent = "Password cannot be empty ";
    errorPassword.style.color = "hsl(0, 100%, 74%)";
    errorPassword.style.textAlign = "right";
    password.style.borderColor = "hsl(0, 100%, 74%)";
    password.style.borderWidth = "2px";
  } else {
    errorPassword.textContent = "";
    errorPassword.style.color = "black";
    password.style.borderColor = "rgb(0, 0, 0, 0.2)";
    password.style.borderWidth = "1px";
  }
});
