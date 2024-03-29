// function playNow() {
//     const homeScreen = document.querySelector('#home-section');
//     homeScreen.classList.add('hidden');

//     const playGroundSection = document.querySelector('#play-ground')
//     playGroundSection.classList.remove('hidden');

//     getRandomAlphabet();
// }


// function getRandomAlphabet() {
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     console.log(alphabets);

//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
//     console.log(index);
// }

function keyboardEventHandler(e) {
    const playerPressed = e.key;
    
    // if player pressed 'Esc' then game over
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet');
    const newAlphabet = currentAlphabet.innerText.toLowerCase();

    // console.log(playerPressed, newAlphabet);

    // condition checking 
    if (playerPressed === newAlphabet) {
        console.log('you have pressed correctly', newAlphabet);

        const finalCurrentScore = getTextElementValueById('current-score');
        const upDatedScore = finalCurrentScore + 1;
        setTextElementValueById('current-score', upDatedScore);
        /* ------------------------------ */
        // const currentScore = document.getElementById('current-score');
        // const newCurrentScore = currentScore.innerText;
        // const finalCurrentScore =parseInt(newCurrentScore);


        const newScore = finalCurrentScore + 1;
        // currentScore.innerText = newScore;

        removeBackgrounColorById(newAlphabet)
        continueGame();
    } else {
        console.log('you lost the point');
        const currentLife = getTextElementValueById('current-life');
        const upDatedLife = currentLife - 1;
        setTextElementValueById('current-life', upDatedLife);

        if (upDatedLife === 0) {
            gameOver();
        }

    }
}

// add eventlistener for keyup eventhandeler
document.addEventListener('keyup', keyboardEventHandler);

function continueGame() {
    // generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet number :', alphabet);

    // set random generated alphabet
    const foundRandomAlphabet = document.getElementById('current-alphabet');
    foundRandomAlphabet.innerText = alphabet.toUpperCase();

    setBackgrounColorById(alphabet);

}


function playNow() {
    hideElementById('home-section');
    hideElementById('final-score')
    showElementById('play-ground');
    
    // reset current-life and current-score
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame();

    
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score')

    // update game-last-score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-last-score', lastScore);

    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgrounColorById(currentAlphabet);
}