# The Dice Game

![](https://media1.giphy.com/media/Qb3VOnPIFW7Vc0LnyH/giphy.gif)

## Overview

This is a solution to the Section 12: Boss Level Challenge 1 - The Dicee Game on [The Complete 2022 Web Development Bootcamp by Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/). This challenges will help me improve my javascript coding skills by building projects.

### The challenge

Users should be able to:

- View the optimal layout for the content depending on their device's screen size.
- Roll both dice when button is clicked.
- Title will display who (player 1 or player 2) is the winner.

### My Solution

- Source Code: [Here](https://github.com/Chillie15/dice-game)
- Source Code (Javascript Vanilla): [Here](https://github.com/Chillie15/dice-game-js-vanilla)
- Live Site: [Here](https://chillie15.github.io/dice-game/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Media Queries
- [Bootstrap 5](https://getbootstrap.com/) - For style and layout
- Bootstrap Grid System
- Javascript ES6
- [JQuery](https://jquery.com/) - JS library

### What I learned

What I learnings while working through this project is:

- Javascript if/else statement:

```js
if (randomDice1 === randomDice2) {
  $("#main-section h1").text("Draw!");
} else if (randomDice1 > randomDice2) {
  $("#main-section h1").text("Player 1 Win");
} else if (randomDice1 < randomDice2) {
  $("#main-section h1").text("Player 2 Win");
}
```

- Javascript Function:

```js
function functionName(parameters) {
  // code to be executed
}

functionName();
```

- JavaScript HTML DOM Selector:

```js
$("#main-section h1");
$(".img1");
```

- JavaScript HTML DOM Remove/Add Class:

```js
$(".img1").addClass("dice-flip");
$(".img2").removeClass("dice-flip");
```

- JavaScript HTML DOM Changing Text:

```js
$("#main-section h1").text("Player 2 Win");
```

- Javascript HTML DOM Element setAttribute():

```js
$(".img1").attr("src", "images/dice" + randomDice1 + ".png");
$(".img2").attr("src", "images/dice" + randomDice2 + ".png");
```

- Javascript HTML DOM Adding eventListener to Button:

```js
$(".btn-roll").on("click", diceGame);
```

Note: this snippet is using JQuery (Javascript Library).

## Got any feedback?

I would like to hearing your feedback or suggestion for this project! I'm always looking to improve my coding skill especially in web development. So if you have anything you'd like to mention about this project or just say hello, please email me at [reskialamsyah@gmail.com](mailto:reskialamsyah@gmail.com?subject=Feedback%20-%20The%20Dice%20Game%20Project).

## Socials

- LinkedIn - [Here](https://www.linkedin.com/in/resky-alamsyah-656652212/)
- Twitter - [@reskialamsyah\_](https://twitter.com/reskialamsyah_)
