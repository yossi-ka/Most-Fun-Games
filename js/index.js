if (localStorage.getItem("users-fun") === null) {
  const arr = [];
  localStorage.setItem("users-fun", JSON.stringify(arr));
}
const sign = document.querySelector(".sign-up");
const log = document.querySelector(".login");
const signUpLink = document.querySelector("#sign-up");
const signUpNew = document.querySelector("#signUpNew");
const forms = document.querySelectorAll("form");
//   pass new customers to the sign-up page
signUpLink.addEventListener("click", () => {
  sign.style.display = "block";
  log.style.display = "none";
});
//  check if the new customers' email is available
const h5Ava = document.querySelector("h5");
const mail = document.querySelector("#sign-email");
let available = true;
mail.addEventListener("input", () => {
  let mailInput = mail.value;
  const usersArr = JSON.parse(localStorage.getItem("users-fun"));
  for (let i = 0; i < usersArr.length; i++) {
    if (usersArr[i].email === mailInput) available = false;
    else available = true;
  }
  if (!available) {
    h5Ava.style.display = "block";
  } else {
    h5Ava.style.display = "none";
  }
});
//  sign up the new customer
if (available) {
  forms[1].addEventListener("submit", () => {
    const inputs = forms[1].querySelectorAll("input");
    const usersArr = JSON.parse(localStorage.getItem("users-fun"));
    const newCustomer = {
      name: inputs[0].value,
      email: inputs[1].value,
      password: inputs[2].value,
    };
    usersArr.push(newCustomer);
    localStorage.setItem("users-fun", JSON.stringify(usersArr));
    sign.style.display = "none";
    log.style.display = "block";
  });
}

//  login for existing customers
forms[0].addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = forms[0].querySelectorAll("input");
  const usersArr = JSON.parse(localStorage.getItem("users-fun"));
  for (let i = 0; i < usersArr.length; i++) {
    if (
      inputs[0].value === usersArr[i].email &&
      inputs[1].value === usersArr[i].password
    ) {
      window.location.href = "/pages/games-menu.html";
    }
  }
});
