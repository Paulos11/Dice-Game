function showRandomImage() {
  var randomNumber = Math.floor(Math.random() * 6) + 1; 
  document.getElementById("diceImage").src = "./img/dice" + randomNumber + ".png"; 
  return randomNumber;
}

function showRandomImage1() {
  var randomNumber = Math.floor(Math.random() * 6) + 1; 
  document.getElementById("diceImage1").src = "./img/dice" + randomNumber + ".png"; 
  return randomNumber;
}

function win() {
  var result1 = showRandomImage();
  var result2 = showRandomImage1();

  if (result1 > result2) {
      document.getElementById("win").innerHTML = "Player One Wins!";
  } else if (result1 < result2) {
      document.getElementById("win").innerHTML = "Player Two Wins!";
  } else {
      document.getElementById("win").innerHTML = "It's a tie!";
  }
}

function rollDice() {
  showRandomImage();
  showRandomImage1();
  win();
}
