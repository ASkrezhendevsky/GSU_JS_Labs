function submitData(){
	let n = +document.getElementById("userInput").value;
	if(!isNumber(n))
	{
		alert('n - is not a Number')
		return;
	}
	let array = [];
	let sum = 0
	for(i = 0; i < n; i++){
		array.push(Math.random());
		sum += array[i];
	}
	alert('Sum = '+sum+'; array = '+ array);
}

function isNumber(value){
	return value === +value && !isNaN(value);
}

