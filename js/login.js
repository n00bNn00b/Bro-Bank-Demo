document.getElementById("login-btn").addEventListener("click", function (e) {
  // email field event

  const userEmail = emailField.value;
  const emailField = document.getElementById("user-email");

  //  user pass event

  const userPass = passField.value;
  const passField = document.getElementById("user-password");

  if (userEmail == "admin@demo.com" && userPass == "demopass") {
    window.location.href = "banking.html";
  } else {
    alert("Wrong Email or Password!");
  }
});
