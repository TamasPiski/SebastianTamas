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
let showCardBtn = $("<button>Next Card</button>").on("click", showCard);
$("#points").after(showCardBtn);
let points = 0;

function showCard(){
        let div = $("<div></div>").html(`
        <div>${cards[0].value} of ${cards[0].color}</div> 
        `).addClass("card");
        $(".cardContainer").append(div);
        let cardIcon = $("<img>").attr("src",`./img/${cards[0].color}.png`);
        div.append(cardIcon);
        if (isNaN(cards[0].value) == true){
            // if(cards[0].value == "Ace"){

            // }
            cards[0].value = 10;
        }
        
        points = parseInt(cards[0].value) + points;
        document.getElementById("points").innerHTML = points;
        cards.splice(0, 1);
}

let cards = [];
let colors = ["hearts", "spades", "diamonds", "clubs"];
let values = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];


for (i= 0; i < 4;i++) {
    for (x=0; x < 13;x++){
        let new_card = new Card(colors[i], values[x])
        cards.push(new_card);
        
    }
}

shuffle(cards)


