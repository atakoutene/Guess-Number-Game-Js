//Activate strict mode
'use strict'; 

//Generate computer random number
let computerGuess =  Math.floor(1 +  Math.random() *20);

//Select different DOM element
const body = document.querySelector('body');
const userTryField = document.querySelector('.guess');
const messageField = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const computerGuessField = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

//Register Events
againBtn.addEventListener('click',() => {
    computerGuess =  Math.floor(1 +  Math.random() *20);
    messageField.textContent = 'Start guessing...';
    userTryField.value = '';
    score.textContent = 20;
    computerGuessField.style.width = '15rem';
    body.classList.remove('color');
    computerGuessField.textContent = '?';
});

checkBtn.addEventListener('click',() => {
    //hold user input in a constant
    const user =Number(userTryField.value);

    //When user enters a number that is between 1 and 20
    if(user != "" && user > 0 && user <= 20) {

        //if user guess is greater than computer number
        if(Number(user) > computerGuess) {
            messageField.textContent = '📈 Guess too high!!';
        
        //decrease the score in case the user failed!
            if(Number(score.textContent) > 1)
                score.textContent = Number(score.textContent) - 1;
            
            //If score is less than 1 stop the game
            else {
                messageField.textContent = '💥 You lost the game!!';
                score.textContent = 0;
            }
        }

        //if user guess is less than computer number
        else if(Number(user) < computerGuess) {
            messageField.textContent = '📉 Guess too small!!';
        
            //decrease the score in case the user failed!
            if(Number(score.textContent) > 1)
                score.textContent = Number(score.textContent) - 1;
            
            //If score is less than 1 stop the game
            else {
                messageField.textContent = '💥 You lost the game!!';
                score.textContent = 0;
            }
        }

        //if user guess is equal to the computer number
        else {
            messageField.textContent = '🎉 Congratulations!!';
            body.classList.add('color');
            computerGuessField.textContent = computerGuess;
            computerGuessField.style.width = '25rem';
        
            //Handle highscore!
            if(Number(score.textContent) > Number(highscore.textContent))
            highscore.textContent = score.textContent;
        }
    }

    //in case the input field is empty or out of bounds
    else{
        messageField.textContent = '⛔ No number! or Number out of bounds';
    }

});



