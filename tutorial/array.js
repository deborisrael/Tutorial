var play_list = [
'i did it my way',
'i did it my way',
'i will make it',
'Js is the way'
];

function print ( message ) {
	document.write(message);
}

function print_list ( list ) {
	var list_html = "<ol>";
	for (var i = 0; i < list.length; i++) {
		list_html += '<li>' + list[i] + '</li>';
		//console.log('i am here');
	}
	list_html += "</ol>";
	print(list_html);
}
//print_list(play_list);

var instock = ['egg', 'milk', 'butter', 'apple', 'cookies', 'cheese', 'bread',
'lettuce', 'carrort', 'broccoli', 'pizza', 'potato', 'crackers', 'onions', 'tofu', 'frozen dinner', 'cuccumber'];

function printout( message ) {
	document.write('<p>' + message + '</p>');
}
//printout(instock);

//2 dimensional array
var music_list = [
['i did it my way ', ' Miles'],
['i did it my way ', ' Williams'],
['i will make it ', ' Smith'],
['Js is the way ', ' Burna']
];

function print_songs( songs ) {
	var list_html = "<ol>";
	for (var i = 0; i < songs.length; i++) {
		list_html += '<li>' + songs[i][0] + 'by' + songs[i][1] + '</li>';
		//console.log('i am here');
	}
	list_html += "</ol>";
	print(list_html);
}
//print_songs(music_list);


//Array Quiz
var question = [
['What is Js? ', 'programming'],
['What do we use? ', 'editor'],
['Where do we learn? ', 'csc']
];
var count = 0;
function print_question( question ) {
	var list_question = "<ol>";
	for (var i = 0; i < question.length; i++) {
		var quest = prompt(question[i][0]);
		//alert(quest);
		if (quest === question[i][1]) {
		 	list_question += print('<p> You got this right <li>' + question[i][0] + ' ' + question[i][1] + '</li></p>');
		 	count += 1;
		 	//alert('U are good');
		}
		
		else {
			list_question += print('<p> You got this wrong! <li>' + question[i][0] + ' Answer is ' + question[i][1] +  '</li></p>');
			count += 1;
		}
				
		//list_question += '<li>' + question[i][0] + ' ' + question[i][1] + '</li>';
		//console.log('i am here');
	}
	list_question += "</ol>";

	print(list_question);

}
print_question(question);