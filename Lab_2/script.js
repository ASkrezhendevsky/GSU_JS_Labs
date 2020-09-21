function userSubmit() {
	var weights = [];
	var maxWeights = 3;
	for(i = 0; (i < maxWeights); i++){
		var value = +document.getElementById('userInput'+i).value;
		if(isNaN(value))
		{
			alert('values must be a nubers');
			return;
		}
		weights.push(value);
	}
	weights.sort();
	document.getElementById('biggest').innerHTML='biggest = '+weights[weights.length-1];
	document.getElementById('smallest').innerHTML='smallest ='+weights[0];
}