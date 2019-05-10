var student = [
	{	
		name: 'Israel',
		track: 'IOS',
		achievement: 20,
		point: 10
	}, 
	{	
		name: 'Dare',
		track: 'Web design',
		achievement: 30,
		point: 15
	},
	{	
		name: 'Taofeek',
		track: 'frontend dev',
		achievement: 40,
		point: 20
	},
	{	
		name: 'Kenny',
		track: 'backend dev',
		achievement: 50,
		point: 25
	},
	{	
		name: 'Ademola',
		track: 'Wordpress',
		achievement: 90,
		point: 90
	}

];

function print(message) {
	var div = document.getElementById('output');
	div.innerHTML = message;
}
//  
var message = '';
// for (var i = 0; i < student.length; i++) {

// 	name = student[i].name;
// 	track = student[i].track;
// 	achievement = student[i].achievement;
// 	point = student[i].point;
// 	message += '<p> Student: ' + name + '</p><p> Track: ' + track + '</p><p> Achievement: ' + achievement + '</p><p> Point: ' + point + '</p>';
// }
// print(message);
var i = 0;
while (true) {
	var sname = prompt('Search student record: type a name [Kenny] (or type "quit" to end)');
	if (sname === 'quit') {
		break;
	}
	for (var i = 0; i < student.length; i++) {
		name = student[i].name;
		track = student[i].track;
		achievement = student[i].achievement;
		point = student[i].point;
		if (sname === name) {
			message += '<p> Student: ' + name + '</p><p> Track: ' + track + '</p><p> Achievement: ' + achievement + '</p><p> Point: ' + point + '</p>';
			print(message);
		}
	}
	// else {
	// 	message = 'Student record not found!';
	// 	print(message);

	// }

}
// let dice = {
// 	sides: 6,
// 	roll: function() {
// 		let random_number = Math.floor(Math.random() * this.sides) + 1;
// 		return random_number;
// 	}
// }


function Dice(sides) {
	this.sides = sides,
	this.roll = function() {
		let random_number = Math.floor(Math.random() * this.sides) + 1;
		return random_number;
	}
}

let dice1 = new Dice(6);
console.log(dice1);