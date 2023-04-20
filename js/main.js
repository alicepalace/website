function printUserInput() {
	const inputText = document.getElementById('inputText').value;
	const output = document.createElement('p');
	output.innerHTML = inputText;
	document.getElementById('printme').appendChild(output);

	// clear input field
	document.getElementById('inputText').value = '';	
}

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', printUserInput);


const inputField = document.getElementById('inputText');
inputField.addEventListener('keypress', function(event) {
	if (event.keyCode == 13) {
		event.preventDefault(); // prevent form submission
		printUserInput();
	}
});