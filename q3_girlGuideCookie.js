"use strict";
let readlineSync = require("readline-sync");
/*
Author: Jordan Campbell
Date: 11/08/2023
Title: PROG1700 Assignment 3- Q3 Girl Guide Cookie Sell-off

*/
// DO NOT EDIT: The main function to house our program code 

//Function to get girl guide sales array
function girlGuideSalesArray(girlGuideCount) {
    let girlGuideSales = [];
    for (let i = 0; i < girlGuideCount; i++) {
        girlGuideSales.push([null, 0]);
    }
    return girlGuideSales;
}

// Function to get girl guide information
function girlGuideInfo(girlGuideNumber, girlGuideSales) {
// Prompt the user to enter the girl guide's name
    let name = readlineSync.question("Emter the guide's name: ");
// Prompt the user to enter the number of boxes sold by the girl guide
    let totalBoxesSold = readlineSync.questionInt(`Enter the number of boxes sold by ${name}: `);
// Store the girl guide's information in the array
    girlGuideSales[girlGuideNumber - 1] = [name, totalBoxesSold];
}

// Function to calculate average sales
function calculateAverageSales(girlGuideSales) {
    let totalSales = 0;
// Loop through the girl guide sales array and calculate the total sales
    for (let i = 0; i < girlGuideSales.length; i++) {
        totalSales += girlGuideSales[i][1];
    }
// Calculate and return the average sales
    return totalSales / girlGuideSales.length;
}

// Function to determine prize for each guide
function determinePrize(girlGuide, averageSales, highestSellingGirlGuide) {
    let [name, totalBoxesSold] = girlGuide;
    let highestSellingBoxesSold = highestSellingGirlGuide[1];

// Determine the prize based on the guide's total boxes sold, average sales, and the highest selling guide
    if (totalBoxesSold > averageSales) {
        return "Super Seller Badge";
    } else if (totalBoxesSold ===highestSellingBoxesSold && totalBoxesSold > 0) {
        return "Trip to the Girl Guide Jamboree in Aruba";
    } else if (totalBoxesSold > 0) {
        return "Cookies to split";
    } else {
        return "-";
    }
}

function main()
{
    let girlGuideCount = readlineSync.questionInt("How many girl guides sold cookies? ");
    let girlGuideSales = girlGuideSalesArray(girlGuideCount);

    for (let i = 1; i <= girlGuideCount; i++) {
        girlGuideInfo(i, girlGuideSales);
}

    let averageSales = calculateAverageSales(girlGuideSales);

    let highestSellingGirlGuide = girlGuideSales[0];
    for (let i = 1; i < girlGuideSales.length; i++) {
        highestSellingGirlGuide = girlGuideSales[i];
    }
}

console.log(`\nThe average number of boxes sold by each guide was: ${averageSales.toFixed(1)}`);

console.log("\nGuide          Prizes Won");
console.log("______________________________")
for (let i = 0; i < girlGuideSales.length; i++) {
    let prize = determinePrize(girlGuideSales[i], averageSales, highestSellingGirlGuide);
    console.log(`${girlGuideSales[i][0]}            ${prize}`);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

/* 
The organizers of the annual Girl Guide cookie sale event want to raise the stakes on the number of cookies sold and are offering cool prizes to those guides who go above and beyond in their sales efforts. The organizers want a program to print the guide list and their prizes.

Your solution should demonstrate an understanding of how to apply list/loop concepts in a program that should:

•	Have a flowchart that clearly shows all the paths of execution that will exist within your designed solution to this problem.
•	Ask the user how many guides sold cookies in the current event,
•	For each numbered guide up to the user-entered count of guides, allow the user to enter a name and the number of boxes of cookies that person sold. 
•	Calculate and output a list of all guide names, 
•	Display the average sales, and the prize that each guide won,
•	The highest selling guide gets a trip to the Girl Guide Jamboree, any guides selling above average get a badge, and any guides selling at least one box get to split the remaining cookies, with guides selling no boxes shut out of all prizes (as they should be).
 (Hint: Some potential solution ideas: Research parallel arrays or two-dimensional lists)

Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (loops and lists).

*/