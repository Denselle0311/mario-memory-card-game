const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card img');
const QUESTION_CARD_IMG = 'question.png';
const SRC_IMG = './cards/';


cards.forEach(eachCard => {
    eachCard.setAttribute('draggable', false);

    eachCard.addEventListener('click', e => {
        
        // e.target.src =  `${SRC_IMG}${rnd}.jpg`;
        console.log(e.target)
    });
});

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