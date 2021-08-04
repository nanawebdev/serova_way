import{isEscEvent}from"./helpers.js";import{setFocus}from"./set-focus.js";const controls=document.querySelectorAll(".countries__control"),countriesContents=document.querySelectorAll(".countries__content"),placesLinks=document.querySelectorAll(".places__link"),buyTourButtons=document.querySelectorAll(".js-open-popup"),buyTourPopup=document.querySelector(".popup"),buyTourCloseButtons=document.querySelectorAll(".js-close-popup"),popupOverlays=document.querySelectorAll(".overlay");function onTourPopupKeydown(o){isEscEvent(o)&&closeBuyTourPopup()}function openBuyTourPopup(){buyTourPopup.classList.add("popup--open"),setFocus(),document.addEventListener("keydown",onTourPopupKeydown)}function closeBuyTourPopup(){buyTourPopup.classList.remove("popup--open"),document.removeEventListener("keydown",onTourPopupKeydown)}function selectControl(o){const e=controls[o];document.querySelector(".countries__control.countries__control--current").classList.remove("countries__control--current"),e.classList.add("countries__control--current")}function showCountryInfoByIndex(o){const e=countriesContents[o];document.querySelector(".countries__content.countries__content--current").classList.remove("countries__content--current"),e.classList.add("countries__content--current")}placesLinks.forEach(((o,e)=>{o.addEventListener("click",(()=>{showCountryInfoByIndex(e),selectControl(e)}))})),controls.forEach(((o,e)=>{o.addEventListener("click",(()=>{showCountryInfoByIndex(e),selectControl(e)}))})),buyTourButtons.forEach((o=>{o.addEventListener("click",openBuyTourPopup)})),buyTourCloseButtons.forEach((o=>{o.addEventListener("click",closeBuyTourPopup)})),popupOverlays.forEach((o=>{o.addEventListener("click",closeBuyTourPopup)}));export{closeBuyTourPopup};