var quotes = [
    {
        //lyric
        quote: "I don't mean to seem like I care about material things <br> Like a social status <br> I just want four walls and adobe slabs for my girls",

        artist: "Animal Collective",

        //track
        source: "My Girls",

        //album
        citation: "Merriweather Post Pavilion",
        
        //year
        date: "2009",

        genre: "electronic",

        bpm: "120",

    },
    {
        quote: "Don't you know that<br>When I see your face<br>It's like sunlight dripping",
        artist: "Bag Raiders",
        source: "Sunlight",
        citation: "Bag Raiders",
        date: "2010",
        genre: "electronic",
        bpm: "125",
    },
    {
        quote: "Push me<br>And then just touch me<br>Till I can get my satisfaction",
        artist: "Benny Benassi",
        source: "Satisfaction",
        citation: "Hypnotica",
        date: "2003",
        genere: "electronic",
        bpm: "130"
    },
    {
        quote: "All is full of love, all is full of love",
        artist: "Bj&#246rk",
        source: "All Is Full Of Love",
        citation: "Homogenic",
        date: "1997",
        genere: "IDM",
        bpm: "76"
    },
    {
        quote: "Another world will surround me<br>Another heart will forgive",
        artist: "The Chemical Brothers",
        source: "Another World",
        citation: "Further",
        date: "2010",
        genere: "electronic",
        bpm: "119"
    },
    {
        quote: "We dissolve everything<br>Scratch follicles so they don’t grow<br>Expose your shame for all to see<br>Sell your bones as ivory",
        artist: "Crystal Castles",
        source: "Insulin",
        citation: "(III)",
        date: "2012",
        genere: "electronic",
        bpm: "123"

    }, {
        quote: "Kiss, suddenly alive<br>Happiness arrive<br>Hunger like a storm<br>How do I begin?",
        artist: "Daft Punk",
        source: "Touch (feat. Paul Williams)",
        citation: "Random Access Memories",
        date: "2013",
        genere: "electronic",
        bpm: "91"

    },
    {
        quote: "I'm gonna take a stab at this<br>Sure you will be alright<br>Make a decision with a kiss<br>Baby I have false spite",
        artist: "Grizzly Bear",
        source: "Ready, Able",
        citation: "Veckatimest",
        date: "2009",
        genere: "Rock",
        bpm: "153"
    }


    /*
    {
        quote: "",
        artist: "",
        source: "",
        citation: "",
        date: "",
        genere: "",
        bpm: ""
    }
    */

];



//first off i want to create an empty array and initialize a handful of other variables.
var tmpArray = [];
var poppedQuoteIndex;
var milliSeconds = 10000;
var printDelay;



//this function populates my empty array with however many objects i have in my quotes array in the form of integers and then shuffles them. that sentence is too long.
function populateAndRandomize() {

    //so i need a loop to iterate and add to my empty array.  pretty easy stuff.
    for (var i = 0; i < quotes.length; i++) {
        tmpArray.push(i);
    }
    //and shuffle my array by calling shuffleArray from fisheryates.js (i'm sure i could just move over the code here but for now it's not a huge concern)
    shuffleArray(tmpArray);
}


//this function actually draws a number and not a quote
function getRandomQuote() {
    //check to see if theres any thing in my tmpArray.  if not then populate it by calling my populateAndRandomize() function.
    if (tmpArray.length <= 0) {

        console.log("shuffled");
        populateAndRandomize();

        //this checks to see the laast used array index from poppedQuoteIndex is the same as the last item in my array.  This is for making sure quotes dont repeat themselves.
        if (poppedQuoteIndex == tmpArray[tmpArray.length - 1]) {
            console.log("DOUBLE");

            //create two variables that are going to be defined with the first item in array and last item in array
            var tmpFirstItem;
            var tmpLastItem;

            //grab first item
            tmpFirstItem = tmpArray.shift();
            //grab last item
            tmpLastItem = tmpArray.pop();

            console.log(tmpFirstItem + " switched with " + tmpLastItem)

            //push first item to the end of the line
            tmpArray.push(tmpFirstItem);

            //bring last item to the begining of the line
            tmpArray.unshift(tmpLastItem);
            //CAUTION: theres a much easier way to do the swapping but it works for now so i'm not messing with it.

        } //end doubles checker
    } //end populate and shuffle

    //by now My temp array is populated, randomized, and checked for doubles.  grab the last item of my array, store it in a variable, and then get rid of item from array.  

    poppedQuoteIndex = tmpArray.pop();
    return poppedQuoteIndex;

}



//funciton change background to a "random" color in HSL
//want to keep it dark so i will just leave the saturation in the middle and lightness low.  Hue can be whatevs and random
function randomBackgroundColor() {
    //grab a random hue value from 1 to 360,  grab body selector, and change it's style.
    var randomH = Math.floor(Math.random() * 360) + 1;
    var pageBackgroundColor = document.querySelector("body");
    pageBackgroundColor.style.backgroundColor = "hsl(" + randomH + ", 60%, 30%)";
}






//this is the stuff that's gunna happen when dat button gets pushed
function printQuote() {

    //change background color
    randomBackgroundColor();

    //clear printDelay which will be re-activated at the end of this function if it's present. at first it wont clear anything since setTimeout hasnt started
    clearTimeout(printDelay);


    //run getRandomQuote and store it in grabRandomQuote
    var grabRandomQuote = getRandomQuote();


    //grab the HTML elements for quote and source
    var quoteClass = document.getElementsByClassName("quote")[0];
    var sourceClass = document.getElementsByClassName("source")[0];
    var artistClass = document.getElementsByClassName("artist")[0];

    console.log(poppedQuoteIndex);
    console.log(tmpArray);

    //print associated grabRandomQuote with quotes index in the HTML
    quoteClass.innerHTML = quotes[grabRandomQuote].quote;
    artistClass.innerHTML = quotes[grabRandomQuote].artist + " ";
    sourceClass.innerHTML = " " + quotes[grabRandomQuote].source;

    //start printDelay so that it prints again in specified seconds.
    printDelay = setTimeout(printQuote, milliSeconds);


}
printQuote();





// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);