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


function getRandomIndex() {
   var randomQuote = Math.floor(Math.random() * quotes.length );
    return randomQuote;  
}





function printQuote() {                                                                     //this script actually has a lot going on
    
   
    var tmpArray = [];
    var quoteIndex;
    
    
    quoteIndex = getRandomIndex();
    

    
    
    
    var quoteBox = document.getElementById("quote-box");
    quoteBox.innerHTML = quotes[quoteIndex].quote + " " + quotes[quoteIndex].source; 
    
}                                                                                           //end printQuote()

printQuote();










// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



