function submitData(){
	let inputString = document.getElementById("userInput").value;
	let outputString = [...new Set(inputString)].join('');
	alert(outputString);
}

