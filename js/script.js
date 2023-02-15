const surveyComponent = document.querySelector(".survey-component");
const sendButton = document.querySelector(".send");
const sentComponent = document.querySelector(".sent-component");


sendButton.addEventListener('click', desapear);

function desapear() {
    surveyComponent.classList.add('inactive');
    sentComponent.classList.remove('inactive');
}