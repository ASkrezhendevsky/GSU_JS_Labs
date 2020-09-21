const dateBreakfast = new Date('December 17, 1995 07:00:00');
const dateDiner = new Date('December 17, 1995 13:00:00');
const dateEveningMeal = new Date('December 17, 1995 19:00:00');
const dateWork = new Date('December 17, 1995 09:00:00');
const dateFreeTime = new Date('December 17, 1995 18:00:00');
const dateSleep = new Date('December 17, 1995 23:00:00');

function clock(){
	let dateNow = new Date();
	document.getElementById('TimeField').innerHTML  = "Time left before breakfast "+decTime(dateBreakfast,dateNow).toTimeString()+" <br>"+
														"Time left before diner "+decTime(dateDiner,dateNow).toTimeString()+" <br>"+
														"Time left before evening meal "+decTime(dateEveningMeal,dateNow).toTimeString()+"  <br>"+
														"Time left before work "+decTime(dateWork,dateNow).toTimeString()+"  <br>"+
														"Time left before freetime "+decTime(dateFreeTime,dateNow).toTimeString()+" <br>"+
														"Time left before sleep "+decTime(dateSleep,dateNow).toTimeString()+" <br>";
	
}
setInterval(clock, 1000);

function decTime(date1, date2){
	return new Date(2020,5,5,date1.getHours()-date2.getHours(),date1.getMinutes()-date2.getMinutes(),date1.getSeconds()-date2.getSeconds());
}

