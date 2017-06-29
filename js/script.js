var quotes = [
    {
        quote: "yellow",
        source: "fish",
        citation: "sunami",
        year: "1994"
    },
    {
        quote: "orange",
        source: "gravy",
        citation: "midwest",
        year: "19922"
    },
    {
        quote: "fever",
        source: "speaker",
        citation: "NY",
        year: "20XX"
    },
    {
        quote: "spiked",
        source: "palm",
        citation: "Miami",
        year: "1983"
    }
];



//first off i want to create an empty array
var tmpArray = [];

//create a function that populates my tmpArray with however many quotes there are in quotes[];
function populateAndRandomize() {

    //so i need a loop.
    for (var i = 0; i < quotes.length; i++) {
        tmpArray.push(i);
    }
    //and shuffle my array by calling shuffleArray from snippets.js (i'm sure i could just move over the code but for now it's not a huge concern)
    shuffleArray(tmpArray);
}

populateAndRandomize();

function printQuote() {

    //as soon as the the button is pushed..i want to test out if there is actually items in my tmpArray.  if there is then sweet! go through the motions of printing stuff.  if not repopulate my tmpArray.


    if (!tmpArray.length > 0) {
        populateAndRandomize();
        //i want to just grab the last item in my quotes array, save it in a temp variable, 
    }
    
    var poppedQuoteIndex = tmpArray.pop();
    //and print it
    var quoteBox = document.getElementById("quote-box");
    quoteBox.innerHTML = quotes[poppedQuoteIndex].quote + " " + quotes[poppedQuoteIndex].source;
}





/* OLD CODE!


function getRandomIndex() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    return randomQuote;
}
function printQuote() { //this script actually has a lot going on

    var quoteIndex; //store the index quote

    var quoteBox = document.getElementById("quote-box");
    quoteBox.innerHTML = quotes[quoteIndex].quote + " " + quotes[quoteIndex].source;
    
} //end printQuote()
printQuote();

*/







// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);