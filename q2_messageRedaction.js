"use strict";
let readlineSync = require("readline-sync");
/*
Author: Jordan Campbell
Date: 11-08-2023
Title: PROG1700 Assignment 3- Q2 Message Redaction

*/
// DO NOT EDIT: The main function to house our program code

//Function to replace specific letters in sentence
function replaceLetters(inputedSentence, lettersToReplace) {
//Count for the number of letters replaced
    let count = 0;
//Empty string to store the edited sentence
    let editedSentence = "";

//Loops through each character in the inputedSentence
for (let i = 0; i < inputedSentence.length; i++) {
//Gets the current character in the sentence
    let character = sentence[i];
//Checks to see if the character needs to be replaced
    let isLetterToReplace = false;
//Loops through each letter in the lettersToReplace array
for (let letter of lettersToReplace) {
//Check if the current character matches the current letter
    if (character.toLowerCase() === letter.toLowerCase()) {
//Replace the character with '_' in the edited sentence
        editedSentence += '_';
//Adds 1 to the count
        count++;
        isLetterToReplace = true;
//Breaks the loop
        break;
    }
}
//If the current character doesnt need to be replaced, it is added to the edited sentence
    if (!isLetterToReplace) {
        editedSentence += character;
    }
}
//Returns the edited sentence and the count of replaced letters
return {editedSentence, lettersReplaced: count};
}
function main()
{
    // enter your code here
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

/*
Design and write a program that removes all desired letters from any user-entered sentence or phrase.
Your solution should demonstrate an understanding of how to apply list and looping concepts in a program that should:

•	Take a sentence or phrase as input,
•	Take a comma-separated list of letters to remove as input,
•	Replace all occurrences of each target letter in the user-entered sentence, regardless of case sensitivity, with an underscore (“_”) character.
•	Display the number of letters removed to the user,
•	The program will keep asking the user to enter a new sentence until the user enters the command ‘quit’.

Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (loops and lists).
 */