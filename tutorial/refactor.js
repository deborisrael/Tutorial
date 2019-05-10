alert('i see yu');
var html = '';
var rgbcolor;

function rgb_colour() {
	return Math.floor(Math.random() * 256);
}
function random_color(){
	var color = 'rgb(';
	color += rgb_colour() + ',';
	color += rgb_colour() + ',';
	color += rgb_colour() + ')';
	return color;
}

for (var i = 1; i <= 100; i++) {

	
	rgbcolor = random_color(); 
	console.log('i am here');
	html += '<div style="background-color:' + rgbcolor + '">.</div>';
}
//console.log(html);
document.write(html); 