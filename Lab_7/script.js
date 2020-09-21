'use strict'

const resistanceNum = 9;
for(let i = 0; i < resistanceNum; i++){
	document.getElementById('InputTable').innerHTML  += '<input id="'+getInputFieldName(i)+'" size=5>'
}

function userSubmit() {
	let resistances = [];
	for(let i = 0; i < resistanceNum; i++)
	{
		let value = +document.getElementById(getInputFieldName(i)).value
		if(!isNumber(value))
		{
			alert('Resistances Must be a numbers');
			return;
		}
		resistances.push(value);
	}
	
	let resistance = 0;
	switch (document.getElementById('inputTapology').value)
	{
		case 'Parralel':
			for(let i = 0; i < resistanceNum; i++)
			{
				resistance += 1/resistances[i] 
			}
			resistance = 1/resistance;
		break;
		case 'Linear':
			for(let i = 0; i < resistanceNum; i++)
			{
				resistance += resistances[i] 
			}
		break;
		default: 
			alert('Incorrect tapology: '+ document.getElementById('inputTapology').value);
		break;
	}

	document.getElementById('Resistance').innerHTML=resistance;
}

function isNumber(value){
	return value === +value;
}

function getInputFieldName(i){
	return 'userInputR'+i
}

