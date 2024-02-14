const cards = document.querySelectorAll('.memory-card');
let flippedCard = false;
let firstCard, secondCard; 
let lockBoard = false;


function flipCard(){
if(lockBoard) return;
if(this  === firstCard) return; 

this.classList.toggle('flip')
if(!flippedCard){
    //first click
    flippedCard = true;
    firstCard = this;  
    //second click
} else {
    flippedCard = false;
    secondCard = this;
    //check if cards match
    checkForMatch();

};
}

cards.forEach(card => card.addEventListener('click', flipCard)); 


function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click',flipCard);

    resetBoard(); 
};

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
     }, 1500); 
};

function checkForMatch(){
   let isMatch = firstCard.dataset.character === secondCard.dataset.character;
   isMatch ? disableCards :  unflipCards();

    // if(firstCard.dataset.character === secondCard.dataset.character){
    //     //match 
    //     disableCards();
    // } else{
    //     //not a match 
    //     unflipCards(); 
    
    // }
}; 

function resetBoard(){
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
};

(function suffleCards(){
    cards.forEach(card => {
        let randomNr = Math.floor(Math.random()*12);
        card.computedStyleMap.order = randomNr;
    });
})();

//immediatly invoked => right after it's definitions 