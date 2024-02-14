const cards = document.querySelectorAll('.memory-card');
let flippedCard = false;
let firstCard, secondCard; 


function flipCard(){
this.classList.toggle('flip')
if(!flippedCard){
    //first click
    flippedCard = true;
    firstCard = this; 
    
    //second click
}else {
    flippedCard = false;
    secondCard = this;

    //check if cards match
console.log(firstCard.data.character)
console.log(secondCard.data.character);

}
// console.log(firstCard, secondCard);

};

cards.forEach(card => card.addEventListener('click', flipCard)); 

