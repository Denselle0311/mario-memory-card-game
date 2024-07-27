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
    
    const colCards =  container.children;
    for(let i = 0; i < colCards.length; i++) {
        const rowCards = colCards[i].children;
        
        for(let j = 0; j < rowCards.length; j++) {
            const rnd = Math.floor(Math.random() * 16) + 1;
            const card = rowCards[j].children[0];
            card.src = `${SRC_IMG}${rnd}.jpg`;
            console.log(card)
        }
    }
}

randomizeCard();