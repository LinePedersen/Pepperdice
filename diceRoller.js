function rollDice() {
  // generate random numbers between 1 and 6
  var roll1 = Math.floor(Math.random() * 6) + 1;
  var roll2 = Math.floor(Math.random() * 6) + 1;

  // set the image source for each die based on the roll

  if (roll1 >= roll2){
    document.getElementById("dice1").src = "dice" + roll1 + ".png";
    document.getElementById("dice2").src = "dice" + roll2 + ".png";
    const result = roll1.toString + roll2.toString
    document.getElementById("resultingThrow").src = result
  }

  else{
    document.getElementById("dice1").src = "dice" + roll2 + ".png";
    document.getElementById("dice2").src = "dice" + roll1 + ".png";
    const result = roll2.toString + roll1.toString
    document.getElementById("resultingThrow").src = result
  }

  return result

}
let rolls = [];

resultingRoll = rollDice()

rolls.push(resultingRoll)

