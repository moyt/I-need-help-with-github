var myCoolArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myCoolArray.length)

function shuffleArray(array) {

    //make my variables for my function
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // Keep looping through array length untill theres nothing to do
    while (currentIndex > 0) {

        // Pick a random number and subtract one from currentIndex
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
} //end shuffleArray();



// Used like so

shuffleArray(myCoolArray);
console.log(myCoolArray);
console.log("can you hear me");