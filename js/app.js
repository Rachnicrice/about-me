'use strict';

var name = prompt('What is your name?');

alert('Hello ' + name + '! My name is Rachael, and this is a page all about me!');

console.log(name);

var go = confirm('BUT WAIT! Before you go any further, we\'re going to play a little game to see how well you already know me. Click OK when you\'re ready.');

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

chocolate = chocolate.startsWith('n');
console.log('Starts with n ' + chocolate);

userAnswers.push(chocolate);
console.log (userAnswers);

if(chocolate === true) {
  alert('That\'s right! I looooooove chocolate! You\'re so good at this game!');
}
else {
  alert('BZZZZZ! Wrong! I love love love chocolate! Better luck on the next one kid');
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
  alert('Yup! I was in an Irish dance company for 10 years. Wow, how\'d you know that?');
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
  alert('Hah! It\'s so sweet that you think that.');
}

//Here is the fourth question sequence
var singer = prompt('Do I hate to sing?');
console.log('User input is ' + singer);

singer = singer.toLowerCase();
console.log('In lowercase is ' + singer);

singer = singer.startsWith('n');
console.log('Starts with n ' + singer);

userAnswers.push(singer)
console.log(userAnswers)

if(singer === true) {
  alert('You\'re right! I love to sing! I would say you should ask me to sing but please don\'t. That\'s embarassing.');
}
else {
  alert('False!! I love to sing. I actually toured Europe with the American Honors Choir. Geeky, yes, but also pretty cool.');
}

//Here is the fifth question sequence
var dragons = prompt('Next question... Do I like dragons?');
console.log('User input is ' + dragons);

dragons = dragons.toLowerCase();
console.log('In lowercase is ' + dragons);

dragons = dragons.startsWith('y');
console.log('Starts with y ' + dragons);

userAnswers.push(dragons)
console.log(userAnswers)

if(dragons === true){
  alert('You\'re right!!! You\'re amazing at this game! But wait... how do you know so much about me?');
}
else {
  alert('Ooooooo wrong answer! That\'s okay though, you\'ve still got a couple of questions left');
}

//Here is the sixth question sequence
for (var i = 1; i < 5; i++) {
  var howManyCountries = prompt('Can you guess how many countries I\'ve been to?');
  console.log (howManyCountries);

  howManyCountries = parseInt(howManyCountries);
  console.log (howManyCountries);

  if (howManyCountries === 6){
    alert('You got it!');
    break;
  }
  else {
    switch (howManyCountries) {
      case 1:
        alert('Too low Joe!');
        break;
      case 2: 
        alert('Omg do you live underground? Because you\'re way too low');
        break;
      case 3:
        alert('You\'re getting warm. Guess higher?');
        break;
      case 4:
        alert('Close but no dice. Try a little higher next time');
        break;
      case 5:
        alert('Just a biiiit higher');
        break;
      case 7:
        alert('You just missed the mark. Try a little lower');
        break;
      case 8:
        alert ('Your guess is too high, try guessing lower');
        break;
      case 9:
        alert('I have a fear of heights. Please go lower');
        break;
      case 10:
        alert('Are you a bird? Are you a plane? Are you SUPERMAN? Because your guess is way too high');
        break;
      default:
        alert('You\'re way off! I\'ll give you a hint... it\'s somewhere between 1 and 10');

    }
  }
}

if (howManyCountries === 6){
  userAnswers.push(true);
} 
else {
  userAnswers.push(false);
}

//Here is the start of the seventh question
var countriesVisited = ['luxembourg', 'italy', 'france', 'germany', 'austria', 'switzerland'];
var isCountriesTrue = false;
console.log(isCountriesTrue);

for (var i = 0; i < countriesVisited.length; i++) {
  var whatCountries = prompt('Okay, now, can you guess the name of one of the countries I\'ve visited?');

  whatCountries = whatCountries.toLowerCase();
  console.log (whatCountries);

  if (whatCountries === countriesVisited[0] || whatCountries === countriesVisited[1] || whatCountries === countriesVisited[2] || whatCountries === countriesVisited[3] || whatCountries === countriesVisited[4] || whatCountries === countriesVisited[5]){
    alert('Correct-o-mundo! I\'ve been to Luxembourg, Italy, France, Germany, Austria, and Switzerland!')
    isCountriesTrue = true;
    break;
  }
  else {
    alert('No, I can\'t say I\'ve ever been there before!');
  }
}

console.log(isCountriesTrue);
userAnswers.push(isCountriesTrue);

var correctAnswers = 0

//Using a for loop to see how many answers are correct
for (var i = 0; i < userAnswers.length; i++){
  if(userAnswers[i] === true){
    correctAnswers = correctAnswers + 1;
  }
}

if (correctAnswers > 6){
  alert ('Congragulations ' + name + '! You got ' + correctAnswers + ' out of 7 questions right!!');
} 
else if (correctAnswers < 6 && correctAnswers > 4) {
  alert('You did it ' + name + '! You finished the quiz! Your final score is...' + correctAnswers + ' out of 7! Not bad, but there\'s still room for improvement');
} 
else {
  alert ('You got ' + correctAnswers + ' out of 7 correct! Well, not your best run ' + name + 'but at least you finished. A for effort!');
}