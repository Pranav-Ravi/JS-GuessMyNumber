'use strict';

// document.querySelector('.message').textContent = " 🎉 Correct Answer!";
// document.querySelector('.score').textContent = 20;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if(!guess) {
        document.querySelector('.message').textContent = "Enter Guessed Number";

    //when the player wins
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Answer!";
        highScore++;
        document.querySelector('.highscore').textContent = highScore;
        //visual changes
        document.querySelector('body').style.background = '#57cc99';
        document.querySelector('.number').style.width = '30rem';

    //when guess is too high
    } else if(guess > secretNumber) {
        if(score > 0) {
            document.querySelector('.message').textContent = "Too high!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost!";
            document.querySelector('.score').textContent = 0;
        }  

    //when guess is too low
    } else if(guess < secretNumber) {
        if(score > 0) {
            document.querySelector('.message').textContent = "Too low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost!";
            document.querySelector('.score').textContent = 0;
        }   
    }
});