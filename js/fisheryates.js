//FISHER YATES!  some super old technique to shuffle arrays
//thanks Youtube User Adam Khoury and this stackoverflow page https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array



function shuffleArray(array) {

    //make my variables for my function
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // Keep looping through array as long as it has something in it and do stuff
    while (currentIndex > 0) {

        // Pick a random number and subtract one from currentIndex
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //put the last item in array in a temporary value
        temporaryValue = array[currentIndex];
        
        //simply make the random number we pulled the index number for our array and equal it to the last item in the array
        array[currentIndex] = array[randomIndex];
        //make the last item equal to the random number index
        array[randomIndex] = temporaryValue;
    }
    //return my new shuffled array :)
    return array;
} //end shuffleArray();
