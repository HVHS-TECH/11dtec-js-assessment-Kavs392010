/***** Variables *****/
var userName = "";
var pocketMoney = 0;

/***** Main Code *****/
console.log(userName);
console.log(pocketMoney);

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FEILD = document.getElementById("nameField");
const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField");

/***** Functions *****/

function getFormInput(){
  let userName = (NAME_FEILD.value);
  OUTPUT.innerHTML = "<p>User Name: " + userName + "</p>";
  let pocketMoney = (POCKET_MONEY_FIELD.value);
  OUTPUT.innerHTML += "<p>Pocket Money: " + pocketMoney + "</p>";
}