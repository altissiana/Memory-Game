

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

var randomize = Math.floor(Math.random()*dankArr.length)
var rando= dankArr[randomize].pop()
console.log(rando)

$(this).on('click', function(a){
    
    $('.card').flip()
    console.log($(a.target).attr('value'))
    // console.log($(b.target).attr('value'))
    
})


back1.innerHTML = dankArr[randomize];
back2.innerHTML = dankArr[randomize];
back3.innerHTML = dankArr[randomize];
back4.innerHTML = dankArr[randomize];
back5.innerHTML = dankArr[randomize];
back6.innerHTML = dankArr[randomize];
back7.innerHTML = dankArr[randomize];
back8.innerHTML = dankArr[randomize];
back9.innerHTML = dankArr[randomize];
back10.innerHTML = dankArr[randomize];
back11.innerHTML = dankArr[randomize];
back12.innerHTML = dankArr[randomize];
back13.innerHTML = dankArr[randomize];
back14.innerHTML = dankArr[randomize];
back15.innerHTML = dankArr[randomize];
back16.innerHTML = dankArr[randomize];
back17.innerHTML = dankArr[randomize];
back18.innerHTML = dankArr[randomize];


