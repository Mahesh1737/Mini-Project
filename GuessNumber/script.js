let randomNumber = parseInt(Math.ceil(Math.random()*100));
console.log(randomNumber);

const userInput = document.querySelector('.guessField');
console.log(userInput);

const submit = document.querySelector('.guessSubmit');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');

let prevGuess = [];
let numGuess = 0;
let playGame = true;

const p = document.createElement('p');

if(playGame){
    submit.addEventListener('click', function(e){
        // guess = '';
        e.preventDefault();
        let guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
        
    })
}

function validateGuess(guess){
    if(guess<0){
        alert('please enter the number above 0');
        console.log('please enter the number above 0');
    }
    else if(guess>100){
        alert('please enter the number below 100');
        console.log('please enter the number below 100');
    }
    else if(guess==='' || isNaN(guess)){
        alert('please enter a valid number');
    }
    else{
        prevGuess.push(guess);
        numGuess++;
        if(numGuess===10){
            displayGuess(guess);
            displayMessage(`Game over, random Number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }

    }
}




function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right, random number is ${randomNumber}`);
        console.log('You guessed it right');
        endGame();
        // guess='';
    }
    else if(guess>randomNumber){
        displayMessage('Number is too high');
    }    
    else if(guess<randomNumber){
        displayMessage('Number is too low');
    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    // numGuess++;
    remainingGuess.innerHTML = `${10-numGuess}`;


}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}<h3>`;
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');

    p.innerHTML = `<h2 id='newgame'>start a new game<h2>`;
    // p.classList.add('button');
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt((Math.random()*100+1));
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        prevGuess=  [];
        numGuess =0;
        remainingGuess.innerHTML = `${10-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    });
}