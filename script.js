/***** Variables *****/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FEILD = document.getElementById("nameField");
const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField");
const SEARCH_BAR = document.getElementById("searchBar");

/***** Image Slider *****/
let slideIndex = 0;

const slides = document.getElementsByClassName("hero-slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function changeSlide(number) {
  slideIndex = slideIndex + number;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

showSlide();

setInterval(function () {
  changeSlide(1);
}, 3000);

/***** Main Code *****/
console.log(userName);
console.log(pocketMoney);


/***** Functions *****/

function getFormInput(){
  let userName = (NAME_FEILD.value);
  OUTPUT.innerHTML = "<p>User Name: " + userName + "</p>";
  let pocketMoney = (POCKET_MONEY_FIELD.value);
  OUTPUT.innerHTML += "<p>Pocket Money: " + pocketMoney + "</p>";
}

function searchMenu() {
  let search = SEARCH_BAR.value;
  let found = false;

  for (let i = 0; i < MENU.length; i++) {

  if (search === MENU[i].name) {
  found = true;
  }
}
if (found) {
  window.location.href = "menu.html";
}
else {
  OUTPUT.innerHTML = "<p>Item not found in menu.</p>";}

}
