document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username-input");
    let email = document.getElementById("email-input");
    let phone = document.getElementById("number-input")
    let password = document.getElementById("password-input");
    let conf_password = document.getElementById("confirm-pass");
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    if (username.value === "") {
        alert("Name must include characters!");
    } else if (!email.value.includes("@") || !email.value.includes(".com")) {
        alert("Email must contain @ & .com!");
    } else if (phone.value == "") {
        alert("You must insert your phone number!");
    } else if (password.value !== conf_password.value) {
        alert("Password must be the same!");
    } else if (password.value !== conf_password.value) {
        alert("Password must be the same!");
    } else if (!male.checked && !female.checked) {
        alert("Pick a gender!");
    } else {
        alert("User Registered!");
        window.location.href = "crypto.html"
    }
});
