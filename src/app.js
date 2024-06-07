/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  newCard();
  const buttonCard = document.getElementById("new-card");
  buttonCard.addEventListener("click", newCard);
};
//Cuando suit sea corazón o diamantes cambiar el top y el end a text-danger y el resto text-dark

function newCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumber = Math.floor(Math.random() * numbers.length);

  console.log("La carta es el" + suits[indexSuits] + numbers[indexNumber]);

  document.querySelector("#top").innerHTML = suits[indexSuits];
  document.querySelector("#number").innerHTML = numbers[indexNumber];
  document.querySelector("#end").innerHTML = suits[indexSuits];
  console.log(suits[indexSuits]);
  if (suits[indexSuits] === "♥" || suits[indexSuits] === "♦") {
    let colorSuit = false ? "text-dark" : "text-danger";
    console.log(colorSuit);
    document.querySelector("#top").className = colorSuit;
    document.querySelector("#end").className = colorSuit;
  } else {
    let colorSuit = true ? "text-dark" : "text-danger";
    console.log(colorSuit);
    document.querySelector("#top").className = colorSuit;
    document.querySelector("#end").className = colorSuit;
  }
}

//Generar una nueva carta cada 10 segundos

// setTimeout(newCard, 2000);
function iniciarIntervalo() {
  setInterval(newCard, 10000);
}
iniciarIntervalo();
