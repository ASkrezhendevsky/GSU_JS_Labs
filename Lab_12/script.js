
function submitWord(){
	let inputStringArray = (document.getElementById("userInput").value).split("");
	let inputStringArrayInvert = inputStringArray.slice();
	inputStringArrayInvert.reverse()
	for(let i = 0; i < inputStringArray.length; i++){
		if(inputStringArray[i] !== inputStringArrayInvert[i]){
			alert('false');
			return;
		}
	}
	alert('true');
}
