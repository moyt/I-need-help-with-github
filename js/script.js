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



//first off i want to create an empty array and create var poppedQuoteIndex which will be used later.
var tmpArray = [];
var poppedQuoteIndex;

//create a function that populates my tmpArray with however many quotes there are in quotes[] and also randomized the array;
function populateAndRandomize() {

    //so i need a loop to iterate and add to my empty array.  pretty easy stuff.
    for (var i = 0; i < quotes.length; i++) {
        tmpArray.push(i);
    }
    //and shuffle my array by calling shuffleArray from snippets.js (i'm sure i could just move over the code here but for now it's not a huge concern)
    shuffleArray(tmpArray);
}


function getRandomQuote() {

    //first just check to see if theres any thing in my tmpArray.  if not then populate it by calling my populateAndRandomize() function.
    if (tmpArray.length <= 0) {
        populateAndRandomize();
        console.log("shuffled");
        //console.log("last popped is " + poppedQuoteIndex + " and last item in array is " + tmpArray[tmpArray.length - 1]);

        //this checks to see the laast used array index from poppedQuoteIndex is the same as the last item in my array.  This is for making sure quotes dont repeat themselves.  
        if (poppedQuoteIndex == tmpArray[tmpArray.length - 1]) {
            console.log("DOUBLE");
            
            var tmpFirstItem;
            var tmpLastItem;
            
            //grab first item
            tmpFirstItem = tmpArray.shift();
            //grab last item
            tmpLastItem = tmpArray.pop();
            
            console.log(tmpFirstItem + " " + tmpLastItem)
            
            //push first item to the end of the line
            tmpArray.push(tmpFirstItem);
            
            //bring last item to the begining of the line
            tmpArray.unshift(tmpLastItem);
        }
    }



    //by now the array is populated, randomized, and checked for doubles.  grab the last item of my array, store it in a variable, and then get rid of item from array.  
    
    poppedQuoteIndex = tmpArray.pop();
    return poppedQuoteIndex;
}


//this is the stuff that's gunna happen when that button gets pushed
function printQuote() {
    
    
    var grabRandomQuote = getRandomQuote();




    //associate last item with quote index and print it
    
    
    
    var quoteBox = document.getElementById("quote-box");
    console.log(poppedQuoteIndex);
    console.log(tmpArray);
    //console.log("this many items left in my array " + tmpArray.length);
    quoteBox.innerHTML = quotes[grabRandomQuote].quote + " " + quotes[grabRandomQuote].source;
}







// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);