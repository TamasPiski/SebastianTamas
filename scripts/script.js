class Card {
    constructor(color, value){
        this.color = color;
        this.value = value;
    }
}

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
let div = document.getElementById("div"); 

function showCard(){
        div.innerHTML += `
        <div>${cards[0].value} of ${cards[0].color}</div> 
        `
        cards.splice(0, 1)
    
}

let cards = [];
let colors = ["hearts", "spades", "diamonds", "clubs"];
let values = ["Ace", "King", "Queen","Jack", "10", "9","8", "7", "6", "5", "4", "3", "2"];

for (i= 0; i < 4;i++) {
    for (x=0; x < 13;x++){
        let new_card = new Card(colors[i], values[x])
        cards.push(new_card)
    }
}


shuffle(cards)
console.log(cards)
showCard()
console.log(cards)
