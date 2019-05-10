// Require htttps module  
const https = require('https');
const username = "chalkers";

//Function to print message to console
function print_message(username, badge_count, points){
	const message = `${username} has ${badge_count} total badge(s) and ${points} points in Javascript`;
	console.log(message);
}

// Connect to the API URL (https://teamtreehouse.com/chalkers.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
	let body = "";
	//check
	console.log(response.statusCode);
	
	// Read the data
	response.on('data', data => {
		body += data.toString(
			
		);
	});
});
 









