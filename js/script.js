var sliderWrappers;
var prevButtons;
var nextButtons;
var modelImageCards;

document.addEventListener("DOMContentLoaded", function() {
    populateNavElementArrays();
    bindFunctionsToAllSliders();
    bindFunctionsToRedirectButtons();
    bindFunctionsToImageCards();
});

function populateNavElementArrays() {
    sliderWrappers = document.querySelectorAll(".slider-wrapper");
    prevButtons = document.querySelectorAll(".nav-prev");
    nextButtons = document.querySelectorAll(".nav-next");
    modelImageCards = document.querySelectorAll(".model-img");
}

function bindFunctionsToAllSliders() {
    for (let i = 0; i < sliderWrappers.length; i++) {
        let position = 0;
        let imgCardsToMove = 2;
        let imgCardWidth = 380;
        let distanceToMove = imgCardsToMove * imgCardWidth;

        let sliderWrapper = sliderWrappers[i];
        let prevButton = prevButtons[i];
        let nextButton = nextButtons[i];

        function slideLeft() {
            position += distanceToMove;
            if (position > 0) {
                position = 0;
            }
            sliderWrapper.style.transform = `translateX(${position}px)`;
        }
        
        function slideRight() {
            position -= distanceToMove;
            if (position < -((sliderWrapper.children.length - 1) * distanceToMove)) {
                position = -((sliderWrapper.children.length - 1) * distanceToMove);
            }
            sliderWrapper.style.transform = `translateX(${position}px)`;
        }

        prevButton.addEventListener("click", slideLeft);
        nextButton.addEventListener("click", slideRight);
    }
}

function bindFunctionsToRedirectButtons() {
    let signUpButton = document.getElementById("sign-up-button");
    let logInButton = document.getElementById("log-in-button");
    let logoHomePage = document.getElementById("logo-img");
    signUpButton.addEventListener("click", switchToSignUpPage);
    logInButton.addEventListener("click", switchToLogInPage);
    logoHomePage.addEventListener("click", switchToHomePage);
}

function bindFunctionsToImageCards() {
    for (let i = 0; i < modelImageCards.length; i++) {
        let modelImageCard = modelImageCards[i];
        modelImageCard.addEventListener("click", function() {
            document.location.href = "html/model_submission.html";
        });
    }
}

function switchToSignUpPage() {
    document.location.href = "html/signup.html";
}

function switchToLogInPage() {
    document.location.href = "html/login.html";
}

function switchToHomePage() {  
    document.location.href = "index.html";
}
