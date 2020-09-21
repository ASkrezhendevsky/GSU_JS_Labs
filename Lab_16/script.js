function submitData(){
	let V = +document.getElementById("userInputV").value;
	let T = +document.getElementById("userInputT").value;
	if(!isNumber(V) || !isNumber(T))
	{
		alert('Not correct data');
		return;
	}
	if(T >= 2*V/9.8)
	{
		alert('impossible situation');
		return;
	}
	/*
	-Vy = Vy0 - g*T
	|Vy| = |Vy0|
	2*Vy = g*T
	Vy = g*T/2
	Vy = sin(a)*V
	sin(a) = g*T/(2*V)
	a = asin(g*T/(2*V)
	*/
	alert(Math.asin(9.8*T/(2*V))/3.14*180);
}

function isNumber(value){
	return value === +value;
}

