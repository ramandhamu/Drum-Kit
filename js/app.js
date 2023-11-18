// Function to play audio for a given button and audio element
function addButtonClickListener(button, audio) {
    button.addEventListener('click', function() {
        audio.play();
    });
}

// Get buttons and audio elements by their classes
const wButton = document.querySelector('.w');
const aButton = document.querySelector('.a');
const sButton = document.querySelector('.s');
const dButton = document.querySelector('.d');
const jButton = document.querySelector('.j');
const kButton = document.querySelector('.k');
const lButton = document.querySelector('.l');

const wAudio = document.querySelector('#myAudioW')
const aAudio = document.querySelector('#myAudioA')
const sAudio = document.querySelector('#myAudioS')
const dAudio = document.querySelector('#myAudioD')
const jAudio = document.querySelector('#myAudioJ')
const kAudio = document.querySelector('#myAudioK')
const lAudio = document.querySelector('#myAudioL')

// Use the function to add click listeners for each button
addButtonClickListener(wButton, wAudio);
addButtonClickListener(aButton, aAudio);
addButtonClickListener(sButton, sAudio);
addButtonClickListener(dButton, dAudio);
addButtonClickListener(jButton, jAudio);
addButtonClickListener(kButton, kAudio);
addButtonClickListener(lButton, lAudio);
