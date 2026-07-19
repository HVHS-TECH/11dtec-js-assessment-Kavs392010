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

/***** Menu *****/

const MENU = [
  { name: "Classic Butter Croissant",
    price: "$3.50",
    description: "A flaky, buttery croissant filled with rich, creamy butter.",
    image: ".jpg"
  },
  { name: "Pain au Chocolat",
    price: "$6.00",
    description: "A classic French pastry filled with rich, dark chocolate.",
    image: ".jpg"
  },
  { name: "Almond Croissant",
    price: "$6.50",
    description: "A flaky croissant filled with almond cream and topped with sliced almonds.",
    image: ".jpg"
  },
  { name: "Raspberry Danish",
    price: "$5.00",
    description: "A sweet pastry filled with raspberry jam and cream cheese.",
    image: ".jpg"
  },
  { name: "Cinnamon Roll",
    price: "$4.50",
    description: "A soft, sweet roll filled with cinnamon and sugar, topped with cream cheese icing.",
    image: ".jpg"
  },
  {name: }
]

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
