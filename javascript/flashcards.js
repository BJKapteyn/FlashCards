let buttons = {
    nextButton: document.getElementById('nextCard'),
    flipCardButton: document.getElementById('flipCard'),
    htmlButton: document.getElementById('htmlButton'),
    htmlButtonOff: document.getElementById('htmlButtonOff'),
    jsButton: document.getElementById('jsButton'),
    jsButtonOff: document.getElementById('jsButtonOff'),
    cssButton: document.getElementById('cssButton'),
    cssButtonOff: document.getElementById('cssButtonOff')
}

function toggleButton(button, onOrOff) {
    if(onOrOff) {
        button.style.backgroundColor = "white";
        button.style.color = "black";
    } else {
        button.style.backgroundColor = "black";
        button.style.color = "white";
    }
}

buttons.htmlButton.addEventListener('click', function() {
    //check to see if the button is already active
    if(buttons.htmlButton.style.color != "black") {
        toggleButton(buttons.htmlButton, true);
        toggleButton(buttons.htmlButtonOff, false);
    }
});

buttons.htmlButtonOff.addEventListener('click', function() {
    if(buttons.htmlButtonOff.style.color != "black") {
        toggleButton(buttons.htmlButtonOff, true);
        toggleButton(buttons.htmlButton, false);
    }
})

buttons.jsButton.addEventListener('click', function() {
    if(buttons.jsButton.style.color != "black") {
        toggleButton(buttons.jsButton, true);
        toggleButton(buttons.jsButtonOff, false);
    }
});

buttons.jsButtonOff.addEventListener('click', function() {
    if(buttons.jsButtonOff.style.color != "black") {
        toggleButton(buttons.jsButtonOff, true);
        toggleButton(buttons.jsButton, false);
    }
})

buttons.cssButton.addEventListener('click', function() {
    if(buttons.cssButton.style.color != "black") {
        toggleButton(buttons.cssButton, true);
        toggleButton(buttons.cssButtonOff, false);
    }
});

buttons.cssButtonOff.addEventListener('click', function() {
    if(buttons.cssButtonOff.style.color != "black") {
        toggleButton(buttons.cssButtonOff, true);
        toggleButton(buttons.cssButton, false);
    }
})


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

let cssCardPile = {
    pileIndex: -1,
    pileArray: [
        new FlashCard("What are effects like :hover called", "pseudo-classes")
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