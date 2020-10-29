'use strict';

// document.querySelector('.message').textContent = " 🎉 Correct Answer!";
// document.querySelector('.score').textContent = 20;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if(!guess) {
        displayMessage("No number!");

    //when the player wins
    } else if(guess === secretNumber) {
        displayMessage("Correct Answer!");
        document.querySelector('.number').textContent = secretNumber;
        if(highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
        //visual changes
        document.querySelector('body').style.background = '#57cc99';
        document.querySelector('.number').style.width = '30rem';
    
    //when guessed number is not equal to secretNumber
    } else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber? 
            "Too High!" : "Too Low");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("You lost!");
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {

    //store default values for score and other numbers
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //restore the default values of message, number, score and input field
    document.querySelector('.score').textContent = score;
    displayMessage("start guessing!");
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';


    //restore background color and number width
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
});