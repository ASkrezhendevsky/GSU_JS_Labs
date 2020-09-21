let wordsQuantity = 0;
submitWordsNum();

function submitWordsNum(){
	wordsQuantity = +document.getElementById('InputWordsQuantity').value;
	
	document.getElementById('WordsInputTable').innerHTML = '';
	
	if(wordsQuantity < 1 || !isNumber(wordsQuantity)){
		return;
	}
	
	for(let i = 0; i < wordsQuantity; i++){
		document.getElementById('WordsInputTable').innerHTML  += '<input id="'+getWordInputFieldName(i)+'" size=7 value="patronage">  <br>';
	}
	
	document.getElementById('WordsInputTable').innerHTML  += "<button onClick='SubmitWords()'>SubmitWords</button> <br>";
}

function SubmitWords() {
	document.getElementById('Output').innerHTML = '';
	for(let i = 0; i < wordsQuantity; i++){
		let word = document.getElementById(getWordInputFieldName(i)).value;
		
		word = word.replace('a','o');
		while(word.indexOf('a') != -1){
			word = word.replace('a','');
		}
	
		document.getElementById('Output').innerHTML += word+', ';
	}	
}

function isNumber(value){
	return value === +value && value != NaN;
}

function getWordInputFieldName(i){
	return 'userWordInputR'+i
}

