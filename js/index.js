// localStorage.removeItem("users-fun")
const arr = [
  { name: "יוסף", email: "abc1000@gmail.com", password: "123456", score: 0 },
];
if (localStorage.getItem("current-user") === null) {
  localStorage.setItem("current-user", JSON.stringify(arr));
}
if (localStorage.getItem("users-fun") === null) {
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
  document.querySelector("header").style.display = "none";
});
//  check if the new customers' email is available
const h5Ava = document.querySelector(".available");
const mail = document.querySelector("#sign-email");
let available = true;
mail.addEventListener("input", () => {
  available = true;
  let mailInput = mail.value;
  const usersArr = JSON.parse(localStorage.getItem("users-fun"));
  for (let i = 0; i < usersArr.length; i++) {
    if (usersArr[i].email === mailInput) {
      available = false;
    }
  }
  if (!available) {
    h5Ava.style.display = "block";
  } else {
    h5Ava.style.display = "none";
  }
});
//  signs-up the new customer
if (available) {
  forms[1].addEventListener("submit", () => {
    const inputs = forms[1].querySelectorAll("input");
    const usersArr = JSON.parse(localStorage.getItem("users-fun"));
    const newCustomer = {
      name: inputs[0].value,
      email: inputs[1].value,
      password: inputs[2].value,
      score: 0,
    };
    usersArr.push(newCustomer);
    localStorage.setItem("users-fun", JSON.stringify(usersArr));
    sign.style.display = "none";
    log.style.display = "block";
    document.querySelector("header").style.display = "block";
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
      localStorage.setItem("current-user", JSON.stringify(usersArr[i]));
      window.location.replace("/pages/games-menu.html");
      break;
    } else {
      document.querySelector(".error").style.display = "block";
    }
  }
});

// //  login for existing customers
// forms[0].addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inputs = forms[0].querySelectorAll("input");
//   const usersArr = JSON.parse(localStorage.getItem("users-fun"));

//   const found = usersArr.find((use, i) => {
//     return use.email === inputs[0].value && use.password === inputs[1].value;
//   });

//   if (found) {
//     localStorage.setItem("current-user", JSON.stringify());         -----      ???      -----
//     window.location.replace("/pages/games-menu.html");
//   } else {
//     document.querySelector(".error").style.display = "block";
//   }
// });
