function getGreeting(guestName) {
	var message="Hi there, " + guestName + "! Hope you're having a great day!"
	return message; 
}

var name = getGreeting(prompt("What's your name?"));
alert(name);