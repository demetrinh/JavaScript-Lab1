"use strict"

let name = "Demetri Hubbard";
let age = 24;
let birthday = "August 25th"
let detroitGC = true
let lifeEvents = [
    "I live in Novi.", 
    "I have a cat named Yara.", 
    "I am getting married in 3 weeks.",
    "I recently passed my motorcycle endorsement course."]

if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michgan. I am currently ${age} years old and my birthday is ${birthday}.`);
}

else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michgan. I am currently ${age} years old and my birthday is ${birthday}.`);
}

for (let i=0; i<lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

// the +1 is added because the random generator going to "10",
while (true) {
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber !==5) {
        counter++;
        console.log(`${randomNumber} !==5`);
    }

    else {
        counter ++;
        console.log(`5===5 It took ${counter} iterations to randomly generate the number 5.`);
        break
    }
}


