function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getRandomAlphabet() {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index, alphabet)
    return alphabet;

}

function setBackgrounColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-500')
    return element;
}
function removeBackgrounColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-500')
    return element;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(e){
    const element = document.getElementById(e);
    const text = element.innerText;
    return text;

}