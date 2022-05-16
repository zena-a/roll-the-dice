//Random dice numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Changes dice image 
document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Shows which player is the winner, or if it is a draw
function diceWinner(player1, player2) {
  if (player1 === player2){
    document.querySelector("h1").innerHTML = "Draw!🎈";
  }
  else if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🎊";
  } 
  else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!✨";
  }
}

diceWinner(randomNumber1, randomNumber2);