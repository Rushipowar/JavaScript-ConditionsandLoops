// Explain:-
/* Conditional statements are programming constructs that allow a program to make decisions and execute different 
blocks of code based on whether a specified condition evaluates to true or false. These statements provide a way 
for a program to choose between different paths of execution, depending on the circumstances.
*/

//If Statement
if (Condition){
    // if Statement code executed or Logic Code.
}
//Example:-
let a = 20;
if (a > 10) {
    console.log("a is greater than 10");
}


//If-Else Statement
if(Condition){
    // if Statement code excution or Logic Code.
}else{
    // If is not true then passed Else.
}
//Example:-
let b = 20;
if (b > 25) {
    console.log("b is greater than 25");
} else {
    console.log("b is not greater than 25");
}


//If-Else If-Else
if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Passed at last else
}
//Example:-
let c = 10;
if (c > 10) {
    console.log("c is greater than 10");
} else if (x < 5) {
    console.log("c is less than 10");
} else {
    console.log("c is equal to 10");
}



//Switch Statement
switch (expression) {
    case value1:
        // Code executed matches value1
        break;
    case value2:
        // Code executed matches value2
        break;
    // ... additional cases as need
    default:
        // Code executed if none of the cases match
}
//Example
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
         console.log("Today is Thursday");
        break;
    case " Friday":
            console.log("Today is  Friday");
            break;
    case "Sunday":
             console.log("End Of the week");
            break;
    default:
        console.log("It's a regular day");
}

