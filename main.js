#! /usr/bin/env node
import inquirer from "inquirer";
console.log("NUMBER GUESSING GAME:-");
console.log("guess number between 1 to 10");
let a = Math.floor(Math.random() * 10);
while (true) {
    let game = await inquirer.prompt({
        name: "guess",
        type: "number",
        message: "Enter your guess number",
    });
    let ans = game.guess;
    if (a == ans) {
        console.log("congratulation your guess number is corret");
        break;
    }
    else {
        console.log("sorry you guess wrong number try again");
    }
    //hints for guessing number:
    if (a > ans) {
        console.log("hint: Number is greater than the number you guess");
    }
    else {
        console.log("hint: Number is less than the number you guess");
    }
}
console.log("Game over");
