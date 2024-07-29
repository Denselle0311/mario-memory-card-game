const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');
const SRC_IMG = './cards/';

let firstCard = null;
let secondCard = null;

document.querySelectorAll('.card-item').forEach(e => e.setAttribute('draggable', false));

container.addEventListener('click', e => {
    const card = e.target.offsetParent;

    if(isFlipped(card)) return

    if(!firstCard) {
        firstCard = card;
        
        flipCard(firstCard);
        console.log(firstCard)
    } else if(!secondCard) {
        secondCard = card;
        
        flipCard(secondCard);

        setTimeout(() => {
            if(!isMatch()) {
                hideCard(firstCard);
                hideCard(secondCard);

            }
            firstCard = null;
            secondCard = null;
            console.log('mathced')
        }, 400);
    }
});

function isFlipped(card) {
    return card.className.includes('visible');
}

function flipCard(card) {
    card.classList.add('visible');
}

function hideCard(card) {
    card.classList.remove('visible');
}

function isMatch() {
    return firstCard.dataset.value == secondCard.dataset.value;
}

function randomizeCard() {
    const set = new Set();
    for(let i = 0; i < cards.length; i+=2) {
        let rnd = Math.floor(Math.random() * 16) + 1;

        while(set.has(rnd)) {
            rnd = Math.floor(Math.random() * 16) + 1;
        }
        set.add(rnd);

        cards[i].querySelector('.front-card').src = `${SRC_IMG}${rnd}.jpg`;
        cards[i+1].querySelector('.front-card').src = `${SRC_IMG}${rnd}.jpg`;

        cards[i].dataset.value = rnd;
        cards[i+1].dataset.value = rnd;
    }
    shuffle();
    shuffle();
}

function shuffle() {
    const end = cards.length-1;
    for(let i = end; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        
        cards[j].style.order = i;
        cards[i].style.order = j;
    }
}


document.addEventListener('DOMContentLoaded', randomizeCard);