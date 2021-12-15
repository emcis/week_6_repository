// Week 6 Project
// the code plays a version of the card game War. 
// The  criteria include:
// Deal 26 Cards to two Players from a Deck. 
// Iterate through the turns where each Player plays a Card
// The Player who played the higher card is awarded a point
// Ties result in zero points for either Player
// After all cards have been played, display the score.


const suits = ['Spades' , 'Diamonds', 'Clubs', 'Hearts'];
const values = ['2', '3', '4', '5','6', '7', '8', '9','10', 'Jack', 'Queen', 'King', 'Ace'];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// This is the class Card. the purpose of the constructor is to create the object class
// and set values if there are any properties
// an instantiation of this class wiil be used to pass values of variables 

//CLASS CARD

class Card{
   constructor (suits, values, ranks){
         this.suits = suits;
         this.values = values;
         this.ranks = ranks;
   }
 }


 // CLASS DECK
 

 class Deck{
    constructor(){
       this.newCardDeck=[];
       this.cards=[];
       this.playerOneHand =[];
       this.playerTwoHand =[];
           } 
 
    createCards(){
      for(let i = 0; i < suits.length; i++) {
         for(let j = 0; j < values.length; j++) {
            this.newCardDeck.push(new Card(suits[i], values[j], ranks[j]));
         }
      }
         
   }

  shuffleCards(){
     for(let i=0; i < 52; i++){
     let tempCard = this.newCardDeck[i];
     let randomNumber = Math.floor(Math.random() * 52);
     this.cards[i] = this.newCardDeck[randomNumber];
     this.cards[randomNumber] = tempCard;
    }
   }
 
   dealCards (){
      for(let i=0; i < 52; i++){
         let dealcards = this.cards[i];
         // I decided to use the modulo 
         if (i%2 == 0) {
            this.playerOneHand.push(dealcards);
         }
         else {
            this.playerTwoHand.push(dealcards);
         }
         
      }

   }
}

// I added these lines of code to make sure that a deck of cards was created, shuffled, and dealt to two players.
let newDeck = new Deck();
newDeck.createCards();
newDeck.shuffleCards();
newDeck.dealCards();
console.log(newDeck.newCardDeck)
console.log(newDeck.cards)
console.log(newDeck.playerOneHand)
console.log(newDeck.playerTwoHand)

class Player{
   constructor(name){
      this.playerName= name;
      this.playerScore = 0;
      this.playerHand = [];
   }
 //takeTurn()
}

// Class Game  Main Program

class Game{
  constructor (){
     this.players = [];  /// this is an array that will have two players
  }
 dealDeck(player1, player2){
    this.players.push(new Player(player1));
    this.players.push(new Player(player2));
    let newDeck = new Deck();
    newDeck.createCards();
    newDeck.shuffleCards();
    newDeck.dealCards();   
    this.players[0].playerHand = newDeck.playerOneHand;
    this.players[1].playerHand = newDeck.playerTwoHand;
 }
 

playCards(){
   for (let i = 0; i<26; i++){
      if(this.players[0].playerHand[i].ranks > this.players[1].playerHand[i].ranks){
         console.log(`${this.players[0].playerName} beats ${this.players[1].playerName}  One point is awarded to ${this.players[0].playerName}.`);
         this.players[0].playerScore++;
         console.log(`${this.players[0].playerScore}`);
      }
 
      else if(this.players[0].playerHand[i].ranks < this.players[1].playerHand[i].ranks){ 
         console.log(`${this.players[1].playerName} beats ${this.players[0].playerName}  One point is awarded to ${this.players[1].playerName}.`);
         this.players[1].playerScore++;
         console.log(`${this.players[1].playerScore}`);
      }
      else if(this.players[0].playerHand[i].ranks == this.players[1].playerHand[i].ranks){ 
         console.log(`There is a tie and no point is awarded to either player`);
      }
      else{
         console.log('error');
      }
   }
      if (this.players[0].playerScore >  this.players[1].playerScore){
         console.log(`${this.players[0].playerName} wins! `);
      }
         else if (this.players[1].playerScore >  this.players[0].playerScore){
         console.log(`${this.players[1].playerName} wins! `);
         console.log('Game Over!');
         }
   }

}
let newGame = new Game();
newGame.dealDeck("George", "Diana")
newGame.playCards();
console.log(newGame.players);
