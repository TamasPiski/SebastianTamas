class Card {
    constructor(cardvalue, cardcolor) {
        this.cardvalue = cardvalue
        this.cardcolor = cardcolor
    }
}

class CardContainer {

    constructor() {
        this.cards = []
        this.populate()
    }

    addCard(card) {
        this.cards.push(card)
    }

    showLayout() {

        for(let player of players) {

            console.log(player)


            
            document.getElementById('container').innerHTML += 
            `
            <div class="player">
                <h2>Player ${player.playerid}</h2>
                <h4>Current : ${player.currentValue}</h4>
                <small>${player.cardCount}</small>
                <div class="card">

                </div>
                <button>CALL</button>
            </div>
            `
        }


    }

    populate() {

        for(let i = 0; i < 4; i++) {

            for(let x = 1; x < 14; x++) {
                
                let card = new Card(x < 11 ? x : x === 13 ? 11 : 10, i === 0 ? "spades" : i === 1 ? "diamonds" : i === 2 ? "hearts" : i === 3 ? "clubs" : null )
                this.addCard(card)

            }

        }

    }

    registerEventListeners() {
        let buttons = document.querySelectorAll('button')

        for(let button of buttons) {
            button.addEventListener('click', e => {

                let id = e.target.parentNode.firstElementChild.textContent.toLowerCase().split(" ")[1]
                players[id-1].getCard()
                
                

            })
        }

    }

}



class CardGame {
    constructor(playerid){
        this.playerid = playerid
        this.currentValue = 0
        this.cardCount = 0
        this.currentCards = []
    }
    
    getCard() {

        let random = Math.floor(Math.random() * deck.cards.length)
        let card = deck.cards[random]
        this.currentValue += card.cardvalue
        this.cardCount++
        this.currentCards.push(card)
        deck.cards.splice(random, 1)
        this.showCards()
        return card

    }

    showCards() {
        let divs = document.querySelectorAll(".card")
        divs[this.playerid-1].innerHTML = ""
        for(let card of this.currentCards) {
            divs[this.playerid-1].innerHTML += `<p>${card.cardvalue} ${card.cardcolor}</p>`
        }
        
    }
    

    

}

const deck = new CardContainer()
const player1 = new CardGame("1")
const player2 = new CardGame("2")
const player3 = new CardGame("3")
const player4 = new CardGame("4")
const players = [player1, player2, player3, player4]
deck.showLayout()
deck.registerEventListeners()


