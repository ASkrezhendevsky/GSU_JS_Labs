function submitData(){
	let n = +document.getElementById("userInput").value;
	let array = [0,1];
	for(let i = 2; i < n; i++){
		array.push(array[i-1]+array[i-2]);
	}
	alert(array);
}

