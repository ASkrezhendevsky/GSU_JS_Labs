'use strict'
let x;
while(isNaN(x) || !(x === +x)){
	x = +prompt('Enter x', 2);
}
document.getElementById('Result').innerHTML='when x = '+ x +
							', (x**2 - 7*x +10)/(x**2 - 8*x +12) = '+
							(x**2 - 7*x +10)/(x**2 - 8*x +12)

