/***** Variables *****/
var name = "Kavya";
var pocketMoney = 0;
var cardNumber = "";
var cardPin = "";
var cardBalance = 0;
var cardExpiryDate = "";
var cardHolderName = "";
var productsPrice = "";
var productsName = "";

/***** Main Code *****/
console.log(name);
console.log(pocketMoney);

const Output = document.getElementById("spaceForJavaScriptOutput");
const Name_Field = document.getElementById("Name_Field");
const PocketMoneyField = document.getElementById("PocketMoneyField");
const CardNumberField = document.getElementById("CardNumberField");
const CardPinField = document.getElementById("CardPinField");
const CardBalanceField = document.getElementById("CardBalanceField");
const CardExpiryDateField = document.getElementById("CardExpiryDateField");
const CardHolderNameField = document.getElementById("CardHolderNameField");
const ProductsPriceField = document.getElementById("ProductsPriceField");
const ProductsNameField = document.getElementById("ProductsNameField");

/***** Functions *****/
function start() {
    Output.innerHTML = "Welcome to Kavya's Café! Please enter your details below.";
  let userName = (Name_Field.value);
  Output.innerHTML += "User Name: " + userName;
  let PocketMoney = (PocketMoneyField.value);
  Output.innerHTML += "Pocket Money: " + PocketMoney;
  let CardNumber = (CardNumberField.value);
  Output.innerHTML += "Card Number: " + CardNumber;
  let CardPin = (CardPinField.value);
  Output.innerHTML += "Card Pin: " + CardPin;
  let CardBalance = (CardBalanceField.value);
  Output.innerHTML += "Card Balance: " + CardBalance;
  let CardExpiryDate = (CardExpiryDateField.value);
  Output.innerHTML += "Card Expiry Date: " + CardExpiryDate;
  let CardHolderName = (CardHolderNameField.value);
  Output.innerHTML += "Card Holder Name: " + CardHolderName;
  let ProductsPrice = (ProductsPriceField.value);
  Output.innerHTML += "Products Price: " + ProductsPrice;
  let ProductsName = (ProductsNameField.value);
  Output.innerHTML += "Products Name: " + ProductsName;
}