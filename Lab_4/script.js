'use strict'
function userSubmit() {
	let dataString = document.getElementById('userInputLastName').value;
	const alovedLen = 20; 
	const countingCharIndex = 4;
	
	if(dataString.length != alovedLen)
	{
		alert('string len should be '+alovedLen+', you enter '+dataString.length);
		return;
	}

	let Result = 0;
	for(let i = 0; i < dataString.length; i++){
		if(dataString[i] == dataString[countingCharIndex]){
			Result++;
		}
	}
	document.getElementById('Result').innerHTML='Amount of '+ dataString[countingCharIndex] +' ('+(countingCharIndex+1)+' char in string) is '+Result;
}