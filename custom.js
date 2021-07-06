function register() {
	var username = document.getElementById("usernameInput").value;
	document.getElementById("message").innerHTML = username + ", you are gladly signed up!";
}

function myFunction() {
	var placeholder = document.getElementById("usernameInput").value;
	document.getElementById("copyEmailHere").innerHTML = placeholder;
}