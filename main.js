

const cards = document.querySelectorAll(".memory_card");
const start = document.getElementById('start')
$('button').on('click', function(){
  document.getElementById('start').innerHTML = ''
  document.getElementById('start').classList.remove('start')
})

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let lives = 7;
let doh = new Audio("assets/doh.wav");

function flipCard() {
   if (lockBoard) return;
   if (this === firstCard) return;

   this.classList.add("flip");

   if (!hasFlippedCard) {
       //first click
       hasFlippedCard = true;
       firstCard = this;

       return;
   }

   //second click
   hasFlippedCard = false;
   secondCard = this;

   checkForMatch();
}


function checkForMatch() {
   let isMatch = firstCard.dataset.framework ===
       secondCard.dataset.framework;

   isMatch ? disableCards() : unflipCards();
   isMatch ? lives = lives : lives = lives - 1;
   
   console.log(lives);
   livesdiv.innerHTML = lives;
   if (lives === 0) {
     doh.play();
     alert('game over');
     location.reload();
   }
  

}


function disableCards() {
   firstCard.removeEventListener("click", flipCard);
   secondCard.removeEventListener("click", flipCard);

   resetBoard();
}

function unflipCards() {
   lockBoard = true;

   setTimeout(() => {
       firstCard.classList.remove("flip");
       secondCard.classList.remove("flip");

       resetBoard();
   }, 500);
}

function resetBoard() {
   hasFlippedCard = false;
   lockBoard = false;
   firstCard = null;
   secondCard = null;
}

(function shuffle() {
   cards.forEach(card => {
       let randomPos = Math.floor(Math.random() * 9);
       card.style.order = randomPos;
   })
})();

cards.forEach(card => card.addEventListener("click", flipCard))


livesdiv.innerHTML = lives;