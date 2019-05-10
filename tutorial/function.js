//Types of function
//Name function
function alert_random() {
	var random_number = Math.floor(Math.random() * 6) + 1;	
	alert(random_number);
}
// alert_random();

//Function expression
var alert_random = function(){
	var random_number = Math.floor(Math.random() * 6) + 1;	
	alert(random_number);
};
//alert_random();

//Return function
function get_random_number() {
	var random_number = Math.floor(Math.random() * 6) + 1;	
	return (random_number);
}
//alert (get_random_number());

function go_to(drink) {
	alert(drink + ' is on its way');
}
// go_to('Rice');

function return_random( upper ) {
	var random_number = Math.floor(Math.random() * upper) + 1;	
	return (random_number);
}
// console.log(return_random(6));
// console.log(return_random(100));

function get_area(length, width, unit) {
	var area = length * width;
	return area + ' ' + unit;
}
//alert(get_area(10, 20, 'sq ft'));

//Function to generate random number
function random_number_function(lower, upper) {
	if ( isNaN(lower) || isNaN(upper) ) {
		return'Error! one or both value is not a number';
	}
	else
		return Math.floor(Math.random() * (upper - lower + 1)) + lower;
	
}
// var end_point = prompt('Enter the upper bound');
// var up = parseInt(end_point);
// var start_point = prompt('Enter the lower bound');
// var low = parseInt(start_point);

//alert(random_number_function(up, low));

// Loops
// do while loop
var upper_bound = 5;
var guess;
var attempts = 0;
var correct_guess = false;
var randomNumber = return_random(upper_bound)

// do {
// 	guess = prompt('I am thinking of a number between 1 and ' + upper_bound);
// 	attempts += 1;
// 	if (parseInt(guess)  === randomNumber) {
// 		correct_guess = true;
// 	}
// }
// while (!correct_guess)
	
// document.write('The number is ' + randomNumber + '. The number of attempt is ' + attempts );

// for loop
for (var i = 1; i <=10; i++) {
	guess = prompt('I am thinking of a number between 1 and ' + upper_bound);
	attempts += 1;
	if (parseInt(guess)  === randomNumber) {
		correct_guess = true;
		break;
	}

}
document.write('The number is ' + randomNumber + '. The number of attempt is ' + attempts );