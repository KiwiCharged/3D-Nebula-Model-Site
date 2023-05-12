document.addEventListener("DOMContentLoaded", function() {
    bindFunctionsToRedirectButtons();
});

function bindFunctionsToRedirectButtons() {
    let signUpButton = document.getElementById("sign-up-button");
    let logInButton = document.getElementById("log-in-button");
    let logoHomePage = document.getElementById("logo-img");
    signUpButton.addEventListener("click", switchToSignUpPage);
    logInButton.addEventListener("click", switchToLogInPage);
    logoHomePage.addEventListener("click", switchToHomePage);
}
function switchToSignUpPage() {
    document.location.href = "signup.html";
}

function switchToLogInPage() {
    document.location.href = "login.html";
}
function switchToHomePage() {  
    document.location.href = "../index.html";
}