var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randomNum1 + ".png";
var randomDiceSrc1 = "images/" + randomDice1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceSrc1);


var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + randomNum2 + ".png";
var randomDiceSrc2 = "images/" + randomDice2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceSrc2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player1 wins!";
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "Player2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
