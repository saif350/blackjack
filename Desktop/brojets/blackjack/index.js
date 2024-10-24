let firstCard = 10
let secondCard = 11
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


function startGame(){
    rendergame();
}

function rendergame() {
    let cardsEl = document.getElementById("cards-el");
    cardsEl.textContent ="cards:"+ cards
   
   
    let string = document.getElementById("sum-el")
    string.textContent = "sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    } 
    document.getElementById("el-message").textContent=message;
}
function drawcard(){
    let card = 2;
    sum+= card;
    cards.push(card)
    startGame();
}