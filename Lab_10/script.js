
const startValue = 2;
const finalValue = 10;

document.getElementById('OutputField').innerHTML = "";
for(let i = startValue; i < finalValue; i++){
	document.getElementById('OutputField').innerHTML += "Number "+i+" is "+(isPrimeNumber(i)?"prime number":"not prime number")+"<br>";
}

function isPrimeNumber(value)
{
	if(isNaN(value) || value !== +value){
		return false;
	}
	for(let i = 2; i < value; i++){
		if(Number.isInteger(value/i)){
			console.log("Number.isInteger(value/i) = "+Number.isInteger(value/i)+" value/i = "+value/i+"; value = "+value+"; i = "+i);
			return false;
		}
		console.log("Number.isInteger(value/i) = "+Number.isInteger(value/i)+" value/i = "+value/i+"; value = "+value+"; i = "+i);
	}
	return true;
}