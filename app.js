// Questions game About Me
'use strict';

// ******************************** Welcome ***************************************

let user = prompt('Hello, what is your name?');
console.log('Welcome ' + user + '. I will ask you five questions about me.');
alert('Welcome ' + user + '. I will ask you five questions about me.');

const userName = document.getElementById('user-name');
userName.innerHTML = user;

// ********************************** About Me *************************************

let score = 0;

// Storing the location of response variables
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const answer5 = document.getElementById('answer5');

// Questions
let question1 = prompt(
	'My name is a secret, you have to guess. Do you think my name is Bob? ( Please answer either yes/no or y/n )'
);
// Question 1
if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
	answer1.innerHTML =
		'Answer: ' + question1 + ': No, that is not correct, my name is Victor.';
	console.log('No, that is not correct, my name is Victor.');
	alert('No, that is not correct, my name is Victor.');
} else {
	answer1.innerHTML =
		'Answer: ' + question1 + ": Yes, that's right, my name is Victor.";
	console.log("Yes, that's right, my name is Victor.");
	alert("Yes, that's right, my name is Victor.");
	score++;
}
// Question 2
let question2 = prompt(
	'I am living somewhere in the UK. Do I live in Liverpool? ( Please answer either yes/no or y/n )'
);

if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y') {
	answer2.innerHTML =
		'Answer: ' + question2 + ": Yes, that's right, I am living in Liverpool.";
	console.log("Yes, that's right, I am living in Liverpool.");
	alert("Yes, that's right, I am living in Liverpool.");
	score++;
} else {
	answer2.innerHTML =
		'Answer: ' +
		question2 +
		': No, that is not correct, I am living in Liverpool.';
	console.log('No, that is not correct, I am living in Liverpool.');
	alert('No, that is not correct, I am living in Liverpool.');
}
// Question 3
let question3 = prompt(
	'Do you think I like going to the PUB? ( Please answer either yes/no or y/n )'
);

if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
	answer3.innerHTML =
		'Answer: ' + question3 + ": Yes, that's right, I like going to the PUB.";
	console.log("Yes, that's right, I like going to the PUB.");
	alert("Yes, that's right, I like going to the PUB.");
	score++;
} else {
	answer3.innerHTML =
		'Answer: ' +
		question3 +
		': No, that is not correct, I like going to the PUB.';
	console.log('No, that is not correct, I like going to the PUB.');
	alert('No, that is not correct, I like going to the PUB.');
}
// Question 4
let question4 = prompt(
	'Do you think I like football? ( Please answer either yes/no or y/n )'
);

if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
	answer4.innerHTML =
		'Answer: ' + question4 + ": Yes, that's right, I like football.";
	console.log("Yes, that's right, I like football.");
	alert("Yes, that's right, I like football.");
	score++;
} else {
	answer4.innerHTML =
		'Answer: ' + question4 + ': No, that is not correct, I like football.';
	console.log('No, that is not correct, I like football.');
	alert('No, that is not correct, I like football.');
}
// Question 5
let question5 = prompt(
	'Do you think I play any sport? ( Please answer either yes/no or y/n )'
);

if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {
	answer5.innerHTML =
		'Answer: ' +
		question5 +
		": No, that is not correct, I don't do sports right now.";
	console.log("No, that is not correct, I don't do sports right now.");
	alert("No, that is not correct, I don't do sports right now.");
} else {
	answer5.innerHTML =
		'Answer: ' +
		question5 +
		": Yes, that's right, I don't do sports right now.";
	console.log("Yes, that's right, I don't do sports right now.");
	alert("Yes, that's right, I don't do sports right now.");
	score++;
}

// ********************************* Number **************************************

let number = Math.floor(Math.random() * 10) + 1;

for (let i = 1; i <= 4; i++) {
	let guess = prompt(i + '- Guess a number between 1 and 10');
	if (guess == number) {
		alert("Great, you're right!, in just " + i + ' steps');
		i = 4;
		score++;
	} else if (guess > number) {
		alert('To Hight');
	} else if (guess < number) {
		alert('To Low');
	}
}

console.log('The number is ' + number);
alert('The number is ' + number);

// ********************************* Multiple **************************************
// Guess a city to visit that is in my top ten list?

let cities = [
	'london',
	'tokyo',
	'paris',
	'new york',
	'barcelona',
	'sydney',
	'singapore',
	'dubai',
	'san francisco',
	'liverpool',
];

for (let i = 1; i <= 6; i++) {
	let cityToFind = prompt('Guess a city to visit that is in my top ten list?');
	let city = cityToFind.toLocaleLowerCase();
	let index = cities.indexOf(city);
	console.log('index: ' + index);

	if (index !== -1) {
		console.log(`Great!, ${cityToFind} is in my top five list.`);
		alert(`Great!, ${cityToFind} is in my top five list, in just ${i} steps.`);
		i = 6;
		score++;
	} else {
		console.log(`${cityToFind} is not in my top five list.`);
		alert(`${cityToFind} is not in my top five list.`);
	}
}

alert('My top ten favorite cities to visit are: ' + cities);
console.log('Your score is: ' + score);
alert('Your score is: ' + score);

const userScore = document.getElementById('user-score');
userScore.innerHTML = score;
