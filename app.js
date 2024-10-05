JS

// Select HTML elements
var content = document.querySelector('#content'); // Element to display the generated sentence
var firstNoun = document.querySelector('#firstNoun'); // Button for first noun
var verb = document.querySelector('#verb'); // Button for verb
var adjective = document.querySelector('#adjective'); // Button for adjective
var secondNoun = document.querySelector('#secondNoun'); // Button for second noun
var locationButton = document.querySelector('#locationButton'); // Button for location
var resetButton = document.querySelector('#reset'); // Button to reset the sentence
var speakButton = document.querySelector('#speak'); // Button to speak the sentence

// Arrays containing different parts of speech
var arrayFirstNoun = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var arrayVerb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var arrayAdjective = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var arraySecondNoun = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var arrayLocation = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Array to hold the final sentence components
var finalArray = [];
// Variable to store the complete sentence
var sentence = [];

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)); // Generate random number
}

// Event listener for the first noun button
firstNoun.addEventListener('click', function() {
    var randomNoun = arrayFirstNoun[getRandomNumber(0, arrayFirstNoun.length - 1)]; // Get a random noun
    content.innerHTML += "<span>" + randomNoun + "</span><br>"; // Display the random noun
    finalArray.push(randomNoun); // Add it to the final array
    console.log(finalArray); // Log the final array for debugging
});

// Event listener for the verb button
verb.addEventListener('click', function() {
    var randomVerb = arrayVerb[getRandomNumber(0, arrayVerb.length - 1)]; // Get a random verb
    content.innerHTML += "<span>" + randomVerb + "</span><br>"; // Display the random verb
    finalArray.push(randomVerb); // Add it to the final array
    console.log(finalArray); // Log the final array for debugging
});

// Event listener for the adjective button
adjective.addEventListener('click', function() {
    var randomAdjective = arrayAdjective[getRandomNumber(0, arrayAdjective.length - 1)]; // Get a random adjective
    content.innerHTML += "<span>" + randomAdjective + "</span><br>"; // Display the random adjective
    finalArray.push(randomAdjective); // Add it to the final array
    console.log(finalArray); // Log the final array for debugging
});

// Event listener for the second noun button
secondNoun.addEventListener('click', function() {
    var randomSecondNoun = arraySecondNoun[getRandomNumber(0, arraySecondNoun.length - 1)]; // Get a random second noun
    content.innerHTML += "<span>" + randomSecondNoun + "</span><br>"; // Display the random second noun
    finalArray.push(randomSecondNoun); // Add it to the final array
    console.log(finalArray); // Log the final array for debugging
});

// Event listener for the location button
locationButton.addEventListener('click', function() {
    var randomLocation = arrayLocation[getRandomNumber(0, arrayLocation.length - 1)]; // Get a random location
    content.innerHTML += "<span>" + randomLocation + "</span><br>"; // Display the random location
    finalArray.push(randomLocation); // Add it to the final array
    console.log(finalArray); // Log the final array for debugging
    sentence = finalArray.join(" "); // Join the final array to create the complete sentence
    content.innerHTML += "<span>" + sentence + "</span><br>"; // Display the complete sentence
    console.log(sentence); // Log the complete sentence for debugging
    return sentence; // Return the complete sentence
});

// Event listener for the reset button
resetButton.addEventListener('click', function() {
    sentence = ""; // Clear the sentence
    finalArray = []; // Clear the final array
    content.innerHTML = ""; // Clear the displayed content
});

// Initialize the speech synthesis object
var synth = window.speechSynthesis;

// Event listener for the speak button
speakButton.onclick = function() {
    speakNow(sentence); // Call the function to speak the generated sentence
}

// Function to convert text to speech
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string); // Create a speech synthesis utterance
    synth.speak(utterThis); // Speak the utterance
}