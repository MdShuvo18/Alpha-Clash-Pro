function playNow() {
    const homeScreen = document.querySelector('#home-section');
    homeScreen.classList.add('hidden');

    const playGroundSection = document.querySelector('#play-ground')
    playGroundSection.classList.remove('hidden');
}