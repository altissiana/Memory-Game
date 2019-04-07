var checkArr = [];


function shuffle(array) {
 var currentIndex = array.length, temporaryValue, randomIndex;

 // While there remain elements to shuffle...
 while (0 !== currentIndex) {

   // Pick a remaining element...
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;

   // And swap it with the current element.
   temporaryValue = array[currentIndex];
   array[currentIndex] = array[randomIndex];
   array[randomIndex] = temporaryValue;
 }

 return array;
}


var card = $('.card')
var cards = [...card]
var cardDiv = $('#carddiv')

var shuffledGame = function(){
  var shuffled = shuffle(cards)
  cardDiv.innerHTML = ''
  for (i = 0; i < shuffled.length; i++){
    [].forEach.call(shuffled, function(e){
      document.getElementById('carddiv').appendChild(e)
    })
  }
}
shuffledGame()

