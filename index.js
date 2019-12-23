var randomNumber = Math.floor(Math.random() * 6) + 1;


var randomDiceImage = "dice" + randomNumber + ".png";

var randomImage = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);

// image2 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);

if(randomNumber < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Sanjar win ;)";
}else if (randomNumber > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Aziza winer ;)";
}