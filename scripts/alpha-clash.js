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

function continueGame() {
    // generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet number :', alphabet);

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