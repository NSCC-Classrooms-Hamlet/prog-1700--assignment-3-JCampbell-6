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
let hoursWorked = [];
    //Stores Day 1 through Day 5 (Mon-Fri).
let daysOfWorkWeek = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]

    //Prompts the user to input amount of hours worked for each day of the week.
for (let i = 0; i < daysOfWorkWeek.length; i++){
    let hours = readlineSync.questionFloat(`Enter hours worked on ${daysOfWorkWeek[i]}: `);
    hoursWorked.push(hours);
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