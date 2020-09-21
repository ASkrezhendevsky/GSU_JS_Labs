'use strict'
function userSubmit() {
	let x = +document.getElementById('userInputX').value;
	let y = +document.getElementById('userInputY').value;
	let operatorCode = +document.getElementById('userInputOperator').value;
	
	if(!isNumber(x) || !isNumber(y) || !isOperatorCode(operatorCode))
	{
		alert('x and y should be numbers and operatorCode should be from 1 to 4');
		return;
	}

	let Result = 0;
	
	switch (operatorCode) {
		case 1: Result = x+y; break;
		case 2:	Result = x-y; break;
		case 3: Result = x*y; break;
		case 4: Result = x/y; break;
		default: alert(" error "); break;
	}

	document.getElementById('Result').innerHTML='Result = '+ Result;
}

function isNumber(value){
	return value === +value;
}

function isOperatorCode(code)
{
	if(code === 1 || code === 2 || code === 3 || code === 4)
	{
		return true;
	}
	return false;
}