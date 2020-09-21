
document.getElementById('OutputField').innerHTML='Result: <br>';

for(let i = 0.1; i < 0.8; i += 0.05){
	let res = (4 * Math.sin (i) - 0.5 * Math.sin (i));
	document.getElementById('OutputField').innerHTML+=''+res+'<br>';
}

