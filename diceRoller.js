function rollDice() {
  // generate random numbers between 1 and 6
  var roll1 = Math.floor(Math.random() * 6) + 1;
  var roll2 = Math.floor(Math.random() * 6) + 1;

  // set the image source for each die based on the roll
  document.getElementById("dice1").src = "dice" + roll1 + ".png";
  document.getElementById("dice2").src = "dice" + roll2 + ".png";
}

rollDice()