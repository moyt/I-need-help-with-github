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
var poppedQuoteIndex;

//create a function that populates my tmpArray with however many quotes there are in quotes[];
function populateAndRandomize() {

    //so i need a loop.
    for (var i = 0; i < quotes.length; i++) {
        tmpArray.push(i);
    }
    //and shuffle my array by calling shuffleArray from snippets.js (i'm sure i could just move over the code but for now it's not a huge concern)
    shuffleArray(tmpArray);
}

function printQuote() {

    if (tmpArray.length <= 0) {
        populateAndRandomize();
        console.log("shuffled");
        console.log("last popped is " + poppedQuoteIndex + " and last item in array is " + tmpArray[tmpArray.length - 1]);
        
        if (poppedQuoteIndex == tmpArray[tmpArray.length -1]){
            console.log("DOUBLE");
            alert("DOUBLE");
        }
    }




    poppedQuoteIndex = tmpArray.pop();



    //and print it

    var quoteBox = document.getElementById("quote-box");
    console.log(poppedQuoteIndex);
    console.log("this many items left in my array " + tmpArray.length);
    quoteBox.innerHTML = quotes[poppedQuoteIndex].quote + " " + quotes[poppedQuoteIndex].source;
}







// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);