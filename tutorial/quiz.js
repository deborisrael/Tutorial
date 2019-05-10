// Mini quiz
var correct = 0;
var wrong = 0;
var quest1 = prompt('what is Nigeria?');
var ans1 = 'country';
if (quest1.toLowerCase() === ans1) {
	correct += 1;
	var msg = '<p>you got the first question right</p>';
}
else {
	msg = '<p>You got the first question wrong. The right answer is ' + ans1 + '</p>';
	wrong += 1;
}
document.write (msg);
var quest2 = prompt('where is Nigeria?');
var ans2 = 'africa';
if (quest2.toLowerCase() === ans2) {
	correct += 1;
	var msg = '<p>you got the second question right</p>';
}
else {
	msg = '<p>You got the second question wrong. The right answer is ' + ans2 + '</p>';
	wrong += 1;
}
document.write (msg);

var quest3 = prompt('what is Lagos?');
var ans3 = 'state';
if (quest3.toLowerCase() === ans3) {
	correct += 1;
	var msg = '<p>you got the third question right</p>';
}
else {
	msg = '<p>You got the third question wrong. The right answer is ' + ans3 + '</p>';
	wrong += 1;
}
document.write (msg);

var quest4 = prompt('where is Lagos?');
var ans4 = 'nigeria';
if (quest4.toLowerCase() === ans4) {
	correct += 1;
	var msg = '<p>you got the fourth question right</p>';
}
else {
	msg = '<p>You got the fourth question wrong. The right answer is ' + ans4 + '</p>';
	wrong += 1;
}
document.write (msg);

var quest5 = prompt('what is my name?');
var ans5 = 'israel';
if (quest5.toLowerCase() === ans5) {
	correct += 1;
	var msg = '<p>you got the fifth question right </p>';
}
else {
	msg = '<p>You got the fifth question wrong. The right answer is ' + ans5 + '</p>';
	wrong += 1;
}
document.write (msg);

document.write('<p>Number of correct answer is ' + correct + '. Number of wrong is ' + wrong + '.</p>'); 

if (correct === 5) {
	alert('You got a Gold crown');
}
else if (correct >= 3 && correct<=4) {
	alert('You got a siliver crown');
}
else if (correct >= 1 && correct<=2) {
	alert('You got a bronze crown');
}
else {
	alert('No crown');
}