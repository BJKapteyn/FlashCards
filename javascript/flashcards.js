let buttons = {
    nextButton: document.getElementById('nextCard'),
    flipCardButton: document.getElementById('flipCard'),
    htmlButton: document.getElementById('htmlButton'),
    jsButton: document.getElementById('jsButton')
}

let ididitgit = "I DID IT GUUUUUUIIIIT";

let cardDisplay = document.getElementById('flashCard');

let flashCard = {
    front: "this is the front",
    back: "this is the back",
    frontOrBack: true
}

//define the constructor to build new flash cards
function FlashCard(front, back) {
    this.frontOfCard = front;
    this.backOfCard = back;
    this.frontOrBack = true;
}

//this is how you define them individually
//let letFlashCard = new FlashCard("let", "defines a block scoped variable");

//This is how you define flash cards in an array
//new FlashCard("", "")
let htmlCardPile = {
    pileIndex: -1,
    pileArray: [
        new FlashCard("Attribute", "Aspect of an HTML element defined inside the element Ex. <button bgrcolor=\"\">"),
        new FlashCard("Element", "Each part that makes up an HTML document")
    ],
    nextCard: function() {
        if(this.pileIndex >= this.pileArray.length - 1) {
            this.pileIndex = 0;
        } else {
            this.pileIndex++;
        }
        cardDisplay.innerText = this.pileArray[this.pileIndex].frontOfCard;
    }
}

let jsCardPile = {
    pileIndex: -1,
    pileArray: [
        new FlashCard("Boolean", "True or False value"),
        new FlashCard("let", "defines a block scoped variable"),
        new FlashCard("HTML element", "Each part that makes up an HTML document")
        
    ],
    nextCard: function() {
        if(this.pileIndex >= this.pileArray.length - 1) {
            this.pileIndex = 0;
        } else {
            this.pileIndex++;
        }
        cardDisplay.innerText = this.pileArray[this.pileIndex].frontOfCard;
    }
}

//input the html element you want to display on and the flash card you want to flip
function flipTheCard(htmlElement, flashCard) {
    if(flashCard.frontOrBack == true) {
        flashCard.frontOrBack = false;
        htmlElement.innerText = flashCard.backOfCard;
    } else {
        flashCard.frontOrBack = true;
        htmlElement.innerText = flashCard.frontOfCard;
    }
}

buttons.flipCardButton.addEventListener('click', function() {
    flipTheCard(cardDisplay, htmlCardPile.pileArray[htmlCardPile.pileIndex]);
});
buttons.nextButton.addEventListener('click', function() {
    htmlCardPile.nextCard();
});