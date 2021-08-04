import{closeBuyTourPopup}from"./tours.js";import{showResultPopup}from"./result-popup.js";const buyTourForm=document.querySelector(".js-buy-tour-form"),questionsForm=document.querySelector(".js-questions-form");function validateEmailInput(e){return e.querySelector("input").value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)?(hideError(e),!0):(highlightError(e),!1)}function validatePhoneInput(e){return e.querySelector("input").value.match(/^\d{10}$/)?(hideError(e),!0):(highlightError(e),!1)}function highlightError(e){e.classList.add("error-message-wrapper--show")}function hideError(e){e.classList.remove("error-message-wrapper--show")}function saveUserDataToStorage(e,r){const o=e.querySelector("input").value,t=r.querySelector("input").value;window.localStorage.setItem("phone",o),window.localStorage.setItem("email",t)}buyTourForm.addEventListener("submit",(e=>{e.preventDefault();const r=buyTourForm.querySelector(".js-error-message-phone"),o=buyTourForm.querySelector(".js-error-message-mail"),t=validateEmailInput(o),u=validatePhoneInput(r);if(t&&u)return closeBuyTourPopup(),showResultPopup(),void saveUserDataToStorage(r,o)})),questionsForm.addEventListener("submit",(e=>{e.preventDefault();const r=questionsForm.querySelector(".js-error-message-phone"),o=questionsForm.querySelector(".js-error-message-mail"),t=validateEmailInput(o),u=validatePhoneInput(r);if(t&&u)return showResultPopup(),void saveUserDataToStorage(r,o)}));