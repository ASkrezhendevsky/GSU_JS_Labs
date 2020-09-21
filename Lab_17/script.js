const MAX_METHODS = 5;
let methodId = -1;
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
	let OutputField = document.getElementById("output_field");
	OutputField.innerHTML = "Current method = "+document.getElementById(getMethodNamebyId(methodId)).value +'<br>';
	switch(methodId)
	{
		case 0:
			OutputField.innerHTML += "<input id='sideA' size=10> <br>" ;
			OutputField.innerHTML += "<input id='sideB' size=10> <br>" ;
			OutputField.innerHTML += "<input id='sideC' size=10> <br>" ;
		break;
		case 1:
			OutputField.innerHTML += "<input id='angelA' size=10> <br>" ;
			OutputField.innerHTML += "<input id='angelB' size=10> <br>" ;
			OutputField.innerHTML += "<input id='angelC' size=10> <br>" ;
			OutputField.innerHTML += "<input id='sideA' size=10> <br>" ;
		break;
		case 2:
			OutputField.innerHTML += "<input id='sideA' size=10> <br>" ;
			OutputField.innerHTML += "<input id='sideB' size=10> <br>" ;
			OutputField.innerHTML += "<input id='angelC' size=10> <br>" ;
		break;
		case 3:
			OutputField.innerHTML += "<input id='sideA' size=10> <br>" ;
			OutputField.innerHTML += "<input id='sideB' size=10> <br>" ;
			OutputField.innerHTML += "<input id='angelA' size=10> <br>" ;
		break;
		case 4:
			OutputField.innerHTML += "<input id='hight' size=10> <br>" ;
			OutputField.innerHTML += "<input id='sideA' size=10> <br>" ;
		break;
		default:
			console.log('error: incorrect method');
			return;
		break;
	}
	OutputField.innerHTML += "<button onClick='submitData()'>SubmitData</button><br>";
}

function submitData(){
	
}

function isNumber(value){
	return value === +value && !isNaN(value);
}

function getMethodNamebyId(id){
	if(!isNumber(id))return;
	return "MethodInput"+id
}



