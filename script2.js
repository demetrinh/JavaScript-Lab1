// Write a script that starts with two   variables: hours and wage. Then write the code to   log the total paycheck based on the hours worked and the wage ($ per hour). If the hours worked is over 40, give 150% pay for the extra hours worked. Try running it with a few different values for hours and wage. Here are some examples...

//Next, if this person got the same paycheck every week, count how many weeks it would take them to   earn $1,000,000. Give the answer as a whole number. For example, with wage=10 and hours=50 it would take 1819 weeks.

let hours = 20;
let wage = 10;
let paycheck = 0;

if (hours <=40) {
    paycheck = hours * wage;
}
else {
    let regularhours = 40 * wage;
    let ot = (hours - 40) * (wage * 1.5);
    paycheck = regularhours + ot;
}
console.log(paycheck);
