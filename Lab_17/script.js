const MAX_METHODS = 5;
let methodId = -1;
const OutputField = document.getElementById("output_field");

function submitMethod(){
	for(let i = 0; i < MAX_METHODS; i++){
		if(document.getElementById(getMethodNamebyId(i)).checked){
			methodId = i;
		}
	}
	if(methodId == -1){
		alert('Method is empty');
		return;
	}
	
	OutputField.innerHTML = "Current method = "+document.getElementById(getMethodNamebyId(methodId)).value +'<br>';
	switch(methodId)
	{
		case 0:
			OutputField.innerHTML += "sideA: <input id='sideA' size=10> <br>" ;
			OutputField.innerHTML += "sideB: <input id='sideB' size=10> <br>" ;
			OutputField.innerHTML += "sideC: <input id='sideC' size=10> <br>" ;
		break;
		case 1:
			OutputField.innerHTML += "angleA: <input id='angleA' size=10> <br>" ;
			OutputField.innerHTML += "angleB: <input id='angleB' size=10> <br>" ;
			OutputField.innerHTML += "angleC: <input id='angleC' size=10> <br>" ;
			OutputField.innerHTML += "sideA: <input id='sideA' size=10> <br>" ;
		break;
		case 2:
			OutputField.innerHTML += "sideA: <input id='sideA' size=10> <br>" ;
			OutputField.innerHTML += "sideB: <input id='sideB' size=10> <br>" ;
			OutputField.innerHTML += "angleC: <input id='angleC' size=10> <br>" ;
		break;
		case 3:
			OutputField.innerHTML += "sideA: <input id='sideA' size=10> <br>" ;
			OutputField.innerHTML += "sideB: <input id='sideB' size=10> <br>" ;
			OutputField.innerHTML += "angleA: <input id='angleA' size=10> <br>" ;
		break;
		case 4:
			OutputField.innerHTML += "hight: <input id='hight' size=10> <br>" ;
			OutputField.innerHTML += "sideA: <input id='sideA' size=10> <br>" ;
		break;
		default:
			console.log('error: submitMethod() - incorrect methodId');
			return;
		break;
	}
	OutputField.innerHTML += "<button onClick='submitData()'>SubmitData</button><br>";
}

function submitData(){
	let S = 0;
	switch(methodId)
	{
		case 0: 
			{
				let sideA = +document.getElementById("sideA").value;
				let sideB = +document.getElementById("sideB").value;
				let sideC = +document.getElementById("sideC").value;
				if(sideA > sideB+sideC || sideB > sideA+sideC || sideC > sideB+sideA){
					notATriangleMassage();
					return;
				}
				let p = (sideA + sideB + sideC)/2;
				S = Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC));
			}
		break;
		case 1: 
			{
				let angleA = degreesToRadians(+document.getElementById("angleA").value);
				let angleB = degreesToRadians(+document.getElementById("angleB").value);
				let angleC = degreesToRadians(+document.getElementById("angleC").value);
				if(angleA+angleB+angleC > degreesToRadians(180)*1.01 || angleA+angleB+angleC < degreesToRadians(180)*0.99){
					notATriangleMassage();
					return;
				}
				let sideA = +document.getElementById("sideA").value;
				S = 0.5*(sideA**2)*Math.sin(angleB)*Math.sin(angleC)/Math.sin(angleA);
			}
		break;
		case 2: 
			{
				let sideA = +document.getElementById("sideA").value;
				let sideB = +document.getElementById("sideB").value;
				let angleC = degreesToRadians(+document.getElementById("angleC").value);
				if(angleC > degreesToRadians(90)){
					notATriangleMassage();
					return;
				}
				S = 0.5*sideA*sideB*Math.sin(angleC);
			}
		break;
		case 3: 
			{
				let angleA = degreesToRadians(+document.getElementById("angleA").value);
				let sideA = +document.getElementById("sideA").value;
				let sideB = +document.getElementById("sideB").value;
				if(Math.abs(sideB/sideA*Math.sin(angleA)) > 1){
					notATriangleMassage();
					return;
				}
				let angleB = Math.asin(sideB/sideA*Math.sin(angleA));
				if(angleB > degreesToRadians(90)){
					notATriangleMassage();
					return;
				}
				S = Math.sin(180 - angleB - angleA) * 0.5*sideA*sideB;
			}
		break;
		case 4: 
			{
				let sideA = +document.getElementById("sideA").value;;
				let hight = +document.getElementById("hight").value;;
				S = 0.5*hight*sideA;
			}
		break;
		default:
			console.log('error: submitData() - incorrect methodId');
			return;
		break;
	}
	
	alert("S = "+ S);
}

function isNumber(value){
	return value === +value && !isNaN(value);
}

function getMethodNamebyId(id){
	if(!isNumber(id))return;
	return "MethodInput"+id
}

function degreesToRadians(degrees)
{
	var pi = Math.PI;
	return degrees * (pi/180);
}
function notATriangleMassage(){
	alert("it is not a triangle");
}



