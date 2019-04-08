
const cards = document.querySelectorAll(".memory_card");
const start = document.getElementById('start')
$('button').on('click', function(){
  photograph.play();
  document.getElementById('start').innerHTML = ''
  document.getElementById('start').classList.remove('start')
})

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let lives = 9;
let score = 0;
let doh = new Audio("assets/doh.wav");
let noice = new Audio("assets/noice.mp3");
let laughitup = new Audio("assets/laughitup.mp3");
let photograph = new Audio("assets/photograph.wav");
let john = new Audio ("assets/john.mp3");

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
   isMatch ? (lives = lives, score = score + 1, noice.play()) : (lives = lives - 1, doh.play());
   
   console.log(lives);
   livesdiv.innerHTML = lives;
   if (lives === 0) {
   
     alert('TRY AGAIN BOZZO');
     location.reload();

   } else if (score === 9) {
     john.play();
     alert('GOOD JOB BUDDY NOW DO IT AGAIN');
     location.reload();

   };
   
  
};

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