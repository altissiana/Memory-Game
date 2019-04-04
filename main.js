
var checkArr = [];

var card1 = `<img src="assets/card-1.jpeg" class="cena" value="1">`
var card2 = `<img src="assets/card-2.jpg"  class="jimmy" value="2">`
var card3 = `<img src="assets/card-3.jpg"  class="jerry" value="1">`
var card4 = `<img src="assets/card-4.jpeg" class="catface" value="2">`
var card5 = `<img src="assets/card-5.jpg"  class="hank" value="1">`
var card6 = `<img src="assets/card-6.jpg"  class="bee" value="2">`
var card7 = `<img src="assets/card-7.jpg"  class="spongebob" value="1">`
var card8 = `<img src="assets/card-8.jpeg" class="satan" value="2">`
var card9 = `<img src="assets/card-9.jpg"  class="elf" value="1">`

var dankArr = [card1, card2, card3, card4, card5, card6, card7, card8, card9,
    card1, card2, card3, card4, card5, card6, card7, card8, card9];

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
  
  var newArr = shuffle(dankArr);
  console.log(newArr);


$(this).on('click', function(a){
    
    $('.card').flip()
    console.log($(a.target).attr('value'))
    
})

back1.innerHTML = newArr[0];
back2.innerHTML = newArr[1];
back3.innerHTML = newArr[2];
back4.innerHTML = newArr[3];
back5.innerHTML = newArr[4];
back6.innerHTML = newArr[5];
back7.innerHTML = newArr[6];
back8.innerHTML = newArr[7];
back9.innerHTML = newArr[8];
back10.innerHTML = newArr[9];
back11.innerHTML = newArr[10];
back12.innerHTML = newArr[11];
back13.innerHTML = newArr[12];
back14.innerHTML = newArr[13];
back15.innerHTML = newArr[14];
back16.innerHTML = newArr[15];
back17.innerHTML = newArr[16];
back18.innerHTML = newArr[17];

