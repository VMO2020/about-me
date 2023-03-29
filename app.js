// Questions
'use strict';

let user = prompt('Hello, what is your name?');
alert('Welcome ' + user + '. I will ask you five questions about me.');

const userName = document.getElementById('user-name');
userName.innerHTML = user;

const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const answer5 = document.getElementById('answer5');

let question1 = prompt(
	'My name is a secret, you have to guess. Do you think my name is Bob? ( Please answer either yes/no or y/n )'
);

if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
	answer1.innerHTML =
		'Answer: ' + question1 + ': No, that is not correct, my name is Victor.';
	// console.log('No, that is not correct, my name is Victor.');
	alert('No, that is not correct, my name is Victor.');
} else {
	answer1.innerHTML =
		'Answer: ' + question1 + ": Yes, that's right, my name is Victor.";
	// console.log("Yes, that's right, my name is Victor.");
	alert("Yes, that's right, my name is Victor.");
}

let question2 = prompt(
	'I am living somewhere in the UK. Do I live in Liverpool? ( Please answer either yes/no or y/n )'
);

if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y') {
	answer2.innerHTML =
		'Answer: ' + question2 + ": Yes, that's right, I am living in Liverpool.";
	// console.log("Yes, that's right, I am living in Liverpool.");
	alert("Yes, that's right, I am living in Liverpool.");
} else {
	answer2.innerHTML =
		'Answer: ' +
		question2 +
		': No, that is not correct, I am living in Liverpool.';
	// console.log('No, that is not correct, I am living in Liverpool.');
	alert('No, that is not correct, I am living in Liverpool.');
}

let question3 = prompt(
	"Do you think I'm a man? ( Please answer either yes/no or y/n )"
);

if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
	answer3.innerHTML =
		'Answer: ' + question3 + ": Yes, that's right, I am a man.";
	// console.log("Yes, that's right, I am a man.");
	alert("Yes, that's right, I am a man.");
} else {
	answer3.innerHTML =
		'Answer: ' + question3 + ': No, that is not correct, I am a man.';
	// console.log('No, that is not correct, I am a man.');
	alert('No, that is not correct, I am a man.');
}

let question4 = prompt(
	'Do you think I like football? ( Please answer either yes/no or y/n )'
);

if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
	answer4.innerHTML =
		'Answer: ' + question4 + ": Yes, that's right, I like football.";
	// console.log("Yes, that's right, I like football.");
	alert("Yes, that's right, I like football.");
} else {
	answer4.innerHTML =
		'Answer: ' + question4 + ': No, that is not correct, I like football.';
	// console.log('No, that is not correct, I like football.');
	alert('No, that is not correct, I like football.');
}

let question5 = prompt(
	'Do you think I play any sport? ( Please answer either yes/no or y/n )'
);

if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {
	answer5.innerHTML =
		'Answer: ' +
		question5 +
		": No, that is not correct, I don't do sports right now.";
	// console.log("No, that is not correct, I don't do sports right now.");
	alert("No, that is not correct, I don't do sports right now.");
} else {
	answer5.innerHTML =
		'Answer: ' +
		question5 +
		": Yes, that's right, I don't do sports right now.";
	// console.log("Yes, that's right, I don't do sports right now.");
	alert("Yes, that's right, I don't do sports right now.");
}
