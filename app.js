



const wordEl = document.getElementById('word');
const WrongLettersEl = document.getElementById('wrong-letters');
const PlayAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

constfigureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface','wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord(){
wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter =>
            `<span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>`
        )
        .join("")
    }`;
    const innerword = wordEl.innerText.replace(/\n/g,'')
    if (innerword === selectedWord){
        finalMessage.innerText = "you have won"
        popup.style.display = "flex"
    }
}

// keydown letter press

window.addEventListener('keydown', event =>{
if(event.keyCode >= 65 && event.keyCode<= 90){
    console.log(123)
}
})

displayWord();