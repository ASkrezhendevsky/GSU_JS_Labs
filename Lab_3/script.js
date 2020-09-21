'use strict'
function userSubmit() {
	let lastName = document.getElementById('userInputLastName').value;
	let vowelsNum = 0;
	let consonatsNum = 0;
	let vowels = 'AEIOYUaeioyu';
	for(let i = 0; i < lastName.length; i++){
		for(let j = 0; j < vowels.length; j++){
			if(lastName[i] == vowels[j]){
				vowelsNum++;
				break;
			}
		}
	}
	consonatsNum = lastName.length-vowelsNum
	document.getElementById('numberOfVowels').innerHTML='number of vowels = '+vowelsNum;
	document.getElementById('numberOfConsonats').innerHTML='number of consonats = '+(consonatsNum);
	
	
}