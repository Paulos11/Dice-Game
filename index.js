function showRandomImage() {
  var randomNumber = Math.floor(Math.random() * 6) + 1; 

  if (randomNumber == 1) {
      document.getElementById("diceImage").src = "./img/dice1.png"; 
  } else if (randomNumber == 2) {
      document.getElementById("diceImage").src = "./img/dice2.png"; 
  } else if (randomNumber == 3) {
      document.getElementById("diceImage").src = "./img/dice3.png"; 
  } else if (randomNumber == 4) {
      document.getElementById("diceImage").src = "./img/dice4.png"; 
  } else if (randomNumber == 5) {
      document.getElementById("diceImage").src = "./img/dice5.png"; 
  } else {
      document.getElementById("diceImage").src = "./img/dice6.png"; 
  }
}


function showRandomImage1() {
  var randomNumber = Math.floor(Math.random() * 6) + 1; 

  if (randomNumber == 1) {
      document.getElementById("diceImage1").src = "./img/dice1.png"; 
  } else if (randomNumber == 2) {
      document.getElementById("diceImage1").src = "./img/dice2.png"; 
  } else if (randomNumber == 3) {
      document.getElementById("diceImage1").src = "./img/dice3.png"; 
  } else if (randomNumber == 4) {
      document.getElementById("diceImage1").src = "./img/dice4.png"; 
  } else if (randomNumber == 5) {
      document.getElementById("diceImage1").src = "./img/dice5.png"; 
  } else {
      document.getElementById("diceImage1").src = "./img/dice6.png"; 
  }
}

