"use strict";
let readlineSync = require("readline-sync");
/*
Author: Jordan Campbell
Date: 11-02-2023
Title: PROG1700 Assignment 3- Q1 Timesheet

*/
// DO NOT EDIT: The main function to house our program code 
function main()
{
//Stores User inputed hours worked.
const hoursWorked = [];
    //Stores Day 1 through Day 5 (Mon-Fri).
const daysOfWorkWeek = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]

//Prompts the user to input amount of hours worked for each day of the week.
for (let i = 0; i < daysOfWorkWeek.length; i++){
    let hours = readlineSync.questionFloat(`Enter hours worked on ${daysOfWorkWeek[i]}: `);
    hoursWorked.push(hours);
}
console.log("--------------------------------------------------------------------------------------------------");
//mostHoursWorked Uses Math.max to calculate the largest number in the hoursWorked array
//mostWorkedDays uses the filter function to 
let mostHoursWorked = Math.max(...hoursWorked);
let mostWorkedDays = daysOfWorkWeek.filter((day, index) => hoursWorked[index] === mostHoursWorked);

//Prints the days that you worked the most hours
if (mostWorkedDays.length === 1){
    console.log(`The most hours worked was on: ${mostWorkedDays[0]} when you worked ${mostHoursWorked} hours`);
}else{
    console.log(`The most hours worked was on: ${mostWorkedDays.join(', ')} when you worked ${mostHoursWorked} hours each day`)
}
console.log("--------------------------------------------------------------------------------------------------");
//For loop that calculate the sum of all numbers in the array and then prints it
let sum = 0
for (let i = 0; i <= hoursWorked[i]; i++){
    sum = sum + hoursWorked[i]
}
console.log("The total number of hours worked was: " + sum);
console.log("The average number of hours worked each day was: " + (sum / hoursWorked.length));
console.log("--------------------------------------------------------------------------------------------------");
let insufficientHours = [];
for (let i = 0; i < daysOfWorkWeek.length; i++) {
// Check if the hours worked on the current day is less than 7
    if (hoursWorked[i] < 7) {
// If so, add the day to the insufficientHoursDays array
        insufficientHours.push(daysOfWorkWeek[i]);
    }
}
// Check if there are any days with insufficient hours
if (insufficientHours.length > 0) {
// If there are, print a message with the list of days
    console.log("Days you slacked off (i.e. worked less than 7 hours): " + insufficientHours.join(', '));
}
}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
/*
Design and write a program that accepts the number of hours worked on each of five work days from the user, then displays different information calculated about those entries as output. 
Your solution should demonstrate an understanding of how to apply list and looping concepts in a program that should:
•	Include a flowchart that clearly shows all the paths of execution that will exist within your designed solution to this problem.
•	Prompt the user to enter the five daily hours worked amounts, and store them in the program. 
•	Determine the day(s) on which the most hours were worked and display the day(s) and hours onscreen. 
•	Calculate and display both the total and the daily average of hours worked.
•	Display a list of all days that had insufficient hours, which is defined as less than 7 hours.
*/