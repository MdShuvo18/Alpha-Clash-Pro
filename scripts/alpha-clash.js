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

    const currentAlphabet = document.getElementById('current-alphabet');
    const newAlphabet = currentAlphabet.innerText.toLowerCase();

    // console.log(playerPressed, newAlphabet);

    // condition checking 
    if (playerPressed === newAlphabet) {
        console.log('you have pressed correctly', newAlphabet);

        const currentScore = document.getElementById('current-score');
        const newCurrentScore = currentScore.innerText;
        const finalCurrentScore =parseInt(newCurrentScore);
       
        
        const newScore = finalCurrentScore + 1;
        currentScore.innerText = newScore;

        removeBackgrounColorById(newAlphabet)
        continueGame();
    } else {
        console.log('you lost the point')
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
    showElementById('play-ground');
    continueGame();
}