
function submitWord(){
	let X = +document.getElementById("userInputX").value;
	let Y = +document.getElementById("userInputY").value;
	let R = +document.getElementById("userInputR").value;
	if(X**2 + Y**2 < R**2){
		alert('true');
		return
	}
	alert('false');
}
