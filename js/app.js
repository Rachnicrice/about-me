'use strict';

var name = prompt('What is your name?');

alert('Hello ' + name + '! My name is Rachael, and this is a page all about me!');

console.log(name);

var go = confirm("BUT WAIT! Before you go any further, we're going to play a little game to see how well you already know me. Click OK when you're ready.");

//Created a console.log before while loop to see if the user answers no first.
console.log(confirm);

while (go === false){

    go = confirm('Are you ready now?');

    //Created a console log to see all the user answers during the while loop. (I want to see how many times they try no before giving up).
    console.log(confirm);
}

var userAnswers = []

//Here is the first question sequence
var chocolate = prompt('Do I hate chocolate?');
console.log('User input is ' + chocolate);

chocolate = chocolate.toLowerCase();
console.log('In lowercase it is ' +chocolate);

chocolate = chocolate.startsWith('y');
console.log('Starts with n ' + chocolate);

userAnswers.push(chocolate);
console.log (userAnswers);

if(chocolate === false) {
    alert("That's right! I looooooove chocolate! You're so good at this game!");
}
else {
    alert("BZZZZZ! Wrong! I love love love chocolate! Better luck on the next one kid");
}

//Here is the second question sequence
var dancer = prompt('Second question... was I once in an Irish dance company?');
console.log('User input is ' + dancer);

dancer = dancer.toLowerCase();
console.log('In lowercase this is ' + dancer);

dancer = dancer.startsWith('y');
console.log('Starts with y ' + dancer);

userAnswers.push(dancer);
console.log(userAnswers);

if(dancer === true){
    alert("Yup! I was in an Irish dance company for 10 years. Wow, how'd you know that?");
}
else {
    alert('You are... incorrect!! I WAS in an irish dance company. I know, totally weird right?');
}

//Here is the third question sequence
var crier = prompt('Here should be an easy one for you... Am I a crier?');
console.log('User input is ' + crier);

crier = crier.toLowerCase();
console.log('In lowercase is ' + crier);

crier = crier.startsWith('y');
console.log('Starts with y ' + crier);

userAnswers.push(crier);
console.log(crier);

if(crier === true) {
    alert('Yeah, you got me. Sorry not sorry');
}
else {
    alert("Hah! It's so sweet that you think that.");
}

//Here is the fourth question sequence
var singer = prompt('Do I hate to sing?');
console.log('User input is ' + singer);

singer = singer.toLowerCase();
console.log('In lowercase is ' + singer);

singer = singer.startsWith('y');
console.log('Starts with y ' + singer);

userAnswers.push(singer)
console.log(userAnswers)

if(singer === false) {
    alert("You're right! I love to sing!. I would say you should ask me to sing but please don't. That's embarassing.");
}
else {
    alert('False!! I love to sing. I actually toured Europe with the American Honors Choir. Geeky, yes, but also pretty cool.');
}

//Here is the fifth question sequence
var dragons = prompt('Last question... Do I like dragons?');
console.log('User input is ' + dragons);

dragons = dragons.toLowerCase();
console.log('In lowercase is ' + dragons);

dragons = dragons.startsWith('y');
console.log('Starts with y ' + dragons);

userAnswers.push(dragons)
console.log(userAnswers)

if(dragons === true){
    alert("You win!!! You're amazing at this game! But wait... how do you know so much about me?");
}
else {
    alert("Ooooooo wrong answer! That's okay though, here's a page with info all about me so you can get to know me better!");
}