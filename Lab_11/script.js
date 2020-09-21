
function submitWords(){
	let inputString = document.getElementById("userInput").value;
	let words = inputString.split(/ +|, +|\. +|\.| |,/);
	//let words = inputString.split(' ');
	let maxValue = 0;
	for(let i = 0; i < words.length; i++){
		if(maxValue < words[i].length){
			maxValue = words[i].length;
		}
	}

	for(let i = 0; i < words.length; i++){
		console.log(i);
		document.getElementById("OutputField").InnerHTML += "f = ";
	}

	alert("words = "+words+"; max lenght = "+ maxValue + "; words num = "+words.length);
}
