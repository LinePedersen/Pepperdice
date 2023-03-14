

//define ranking order of scores
var rankingOrder = ["21", "31", "66", "55", "44", "33", "22", "11", "65", "64", "63", "62", "61", "54", "53", "52", "51", "43", "42", "41", "32"];

//Let player roll dice
function playerDice(){
    var randomImagesArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    var num = Math.floor(Math.random() * randomImagesArray.length);
    var img = randomImagesArray[num];
    document.getElementById('bigpic').src = img.replace();
    document.getElementById('bigpic').style.display='block';
}

//Decide player outout  (array)
var firstDiceCombination = [[3, 4, 3], [2, 5, 3], [3, 4], [3], [4, 6, 3], [4, 6, 4], [4, 6]];
var secondDiceCombination = [[2, 2, 1], [2, 4, 1], [3, 1], [2], [2, 4, 2], [1, 5, 3], [1, 5]];





//show dice pictures to match score - image changes 10 times before showing player the final score
function StartDice(){
    if(checkTurn == 0  && rollNumber == 1){
        check = 0;
        var1 = setInterval("diceRoll()", 100)
        var2 = setInterval("diceRoll2()", 100)
        var3 = setInterval("diceRoll3()", 100)
        var4 = setInterval("diceRoll4()", 100)
        var5 = setInterval("diceRoll5()", 100)
        var6 = setInterval("diceRoll6()", 100)
        var7 = setInterval("diceRoll7()", 100)
        var8 = setInterval("diceRoll8()", 100)
        var9 = setInterval("diceRoll9()", 100)
        var10 = setInterval("diceRoll10()", 100)

    }
}
//stops the random pictures and shows score
setTimeout("stopFunction()", 1000)
if(firstDiceArray[round][diceIncrement] == 1){
    setTimeout("display10()",1100)
}

//let player declare score. Maybe via buttons
    // make buttons of lower score not clickable
//<button onclick "myFunction()">score1</button>
//function parse score into xml format and save

//Save declared score as well as actual score
//set  rate for Pepper trusting player 
    // eventually set pepper to trust the smaller numbers 
    // but set a probability of pepper checking higher scores
// If pepper trusts, let pepper roll
    // Hide buttons from player as well as score 
// Save peppers decalared score as well as actual score
    //if player trust pepper, then delete the first score, and  save new player scores
    //if not, show true result 
// if declared mia at any point, the opponent will either have to trust or check 
//if pepper declares mia, button for player will change to "trust" and "check"
    //if player checks, and pepper lies, player will get 1 point
    // if player checks and pepper tells the truth, pepper gets 2 points
    // if player trusts pepper, pepper gets 1 point
//make a button showing the rules and score ranking when clicked
//when pepper rolls, disable other buttons such as entering score