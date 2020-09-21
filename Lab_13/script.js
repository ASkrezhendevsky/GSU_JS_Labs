
function submitWord(){
	let inputString = document.getElementById("userInput").value;
	if(inputString.search(/[0-9a-z_-]+@[0-9a-z_-]+\.[a-z{2,5}]/) >= 0){
		alert('true');
		return
	}
	alert('false');
}
