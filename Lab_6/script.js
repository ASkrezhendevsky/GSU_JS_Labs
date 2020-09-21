'use strict'
function userSubmit() {
	let u = +document.getElementById('userInputU').value;
	let i = +document.getElementById('userInputI').value;
	
	if(!isNumber(u) || !isNumber(i))
	{
		alert('u and i should be numbers');
		return;
	}

	let resistance = u/i;

	document.getElementById('Resistance').innerHTML=resistance;
}

function isNumber(value){
	return value === +value;
}