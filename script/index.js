$(".btn-roll").on("click", diceGame);

//Add flip animation to both dice image
function diceAnimation() {
  $(".img1").addClass("dice-flip");
  $(".img2").addClass("dice-flip");
}

function diceGame() {
  //Generating two random number of dice
  let randomDice1 = Math.floor(Math.random() * 6) + 1;
  let randomDice2 = Math.floor(Math.random() * 6) + 1;

  //Generating two random number of dice
  diceAnimation();

  //remove flip animation to dice image after 600ms
  setTimeout(function () {
    $(".img1").removeClass("dice-flip");
    $(".img2").removeClass("dice-flip");
  }, 600);

  //Changing Dice Image from 1-6 by using attr() method to changing .img1 and .img2 src
  $(".img1").attr("src", "images/dice" + randomDice1 + ".png");
  $(".img2").attr("src", "images/dice" + randomDice2 + ".png");

  // Deciding the Winner
    // Dice equal = Draw
  if (randomDice1 === randomDice2) {
    $("#main-section h1").text("Draw!");

    // Dice Player 1 > Player 2 = Player 1 Win
  } else if (randomDice1 > randomDice2) {
    $("#main-section h1").text("Player 1 Win");

    // Dice Player 1 < Player 2 = Player 2 Win
  } else if (randomDice1 < randomDice2) {
    $("#main-section h1").text("Player 2 Win");
  }
}
