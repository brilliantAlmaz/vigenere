document.addEventListener("DOMContentLoaded", function(event) { 
//cypher
const btnCypher = document.querySelector('.cypher-btn');
const resultCypher = document.querySelector('.cypher-result');
const btnDecypher = document.querySelector('#decypherBtn');
const resultDecypher = document.querySelector('.decypher-result');
let key;
let text;
let keyD;
let textD;

//clear btns
const clearBtn = document.querySelectorAll('.clear__btn');
clearBtn.forEach((item,index) => item.addEventListener('click', function(){
	if (index==0){
		document.querySelector('.text').value='';
		document.querySelector('.key').value='';
	}
	else{
		document.querySelector('.decypher__text').value='';
		document.querySelector('.decypher__key').value= '';
	}
}))

//valid inputs
//text inputs



//fileReader
const inputCypher = document.querySelector('#file-cypher');
inputCypher.addEventListener('change', function(e) {
	//console.log(inputCypher.files)
	const reader = new FileReader();
	reader.onload = function(){
		document.querySelector('.text').value=reader.result;
		//document.querySelector('.decypher__text').value=reader.result;
		reader.abort();
	}
	reader.readAsText(inputCypher.files[0]);
})

const inputDecypher = document.querySelector('#file-decypher');
console.log(inputDecypher)
console.log(inputCypher)
inputDecypher.addEventListener('change', function(e) {
	//console.log(inputCypher.files)
	const reader = new FileReader();
	reader.onload = function(){
		//document.querySelector('.text').value=reader.result;
		document.querySelector('.decypher__text').value=reader.result;
		reader.abort();
	}
	reader.readAsText(inputDecypher.files[0]);
})




btnDecypher.addEventListener('click', function(){
	textD = document.querySelector('.decypher__text').value;
	keyD = document.querySelector('.decypher__key').value;
	if (key == ''){
		key='garbage';
		document.querySelector('.key').value='garbage';
	}
	resultDecypher.value=decypher(textD,keyD);
});
btnCypher.addEventListener('click', function(){
	text = document.querySelector('.text').value;
	key = document.querySelector('.key').value;
	if (key == ''){
		key='garbage';
		document.querySelector('.key').value='garbage';
	}
	else
		resultCypher.value=cypher(text,key);
});

function cypher(text,key){
	let newText='';
	let charCode;
	for (let i=0; i<text.length;i++){
		//console.log(key[i]);
		if (text.charCodeAt(i)>=1040 && text.charCodeAt(i) <=1071){ //russian uppercase
			charCode = ((text.charCodeAt(i)-1040 + (key.charCodeAt(i % key.length))-1040) % 32) + 1040;
		}
		else if (text.charCodeAt(i)>=1072 && text.charCodeAt(i) <=1103){ //russian lowercase
			charCode = ((text.charCodeAt(i)-1072 + (key.charCodeAt(i % key.length))-1072) % 32) + 1072;
		}
		else if (text.charCodeAt(i)>=65 && text.charCodeAt(i) <=90){ // english uppercase
			charCode = ((text.charCodeAt(i)-65 + (key.charCodeAt(i % key.length))-65) % 26) + 65;
			//console.log(text.charCodeAt(i))
		}
		else if (text.charCodeAt(i)>=97 && text.charCodeAt(i) <=122){ // english lowercase
			charCode = ((text.charCodeAt(i)-97 + (key.charCodeAt(i % key.length))-97) % 26) + 97;
		}
		else{ //other symbols remain the same
			charCode=text.charCodeAt(i);
		}

		if (text.charCodeAt(i) == 1105){
			charCode = ((text.charCodeAt(i)-1072 +4 + (key.charCodeAt(i % key.length))-1072) % 32) + 1072;
		}
		else if (text.charCodeAt(i) == 1025)
		{
			charCode = ((text.charCodeAt(i)-1040 +20 + (key.charCodeAt(i % key.length))-1040) % 32) + 1040;
		}
		newText+=String.fromCharCode(charCode);
		//console.log(text.charCodeAt(i))
	}
	return newText;
}

function decypher(text,key){
	let newText='';
	let charCode;
	for (let i=0; i<text.length;i++){
		//text.charCodeAt(i);
		if (text.charCodeAt(i)>=1040 && text.charCodeAt(i) <=1071){ //russian uppercase
			if (text.charCodeAt(i) - key.charCodeAt(i % key.length) >=0)
				charCode = (text.charCodeAt(i) - key.charCodeAt(i % key.length))%32 + 1040;
			else{
				charCode = (text.charCodeAt(i) - key.charCodeAt(i % key.length))%32 +32 + 1040;
			}
		}
		else if (text.charCodeAt(i)>=1072 && text.charCodeAt(i) <=1103){ //russian lowercase
			if (text.charCodeAt(i) - key.charCodeAt(i % key.length) >=0)
				charCode = (text.charCodeAt(i) - key.charCodeAt(i % key.length))%32 + 1072;
			else{
				charCode = (text.charCodeAt(i) - key.charCodeAt(i % key.length))%32 +32 + 1072;
			}
		}
		else if (text.charCodeAt(i)>=65 && text.charCodeAt(i) <=90){ // english uppercase
			if (text.charCodeAt(i) - key.charCodeAt(i % key.length) >=0)
				charCode = (text.charCodeAt(i) - key.charCodeAt(i % key.length))%26 + 65;
			else{
				charCode = (text.charCodeAt(i) - key.charCodeAt(i % key.length))%26 +26 + 65;
			}
		}
		else if (text.charCodeAt(i)>=97 && text.charCodeAt(i) <=122){ // english lowercase
			console.log(text.charCodeAt(i) - key.charCodeAt(i % key.length) )
			if (text.charCodeAt(i) - key.charCodeAt(i % key.length) >=0)
				charCode = (text.charCodeAt(i) - key.charCodeAt(i % key.length))%26 + 97;
			else{
				charCode = (text.charCodeAt(i) - key.charCodeAt(i % key.length))%26 +26 + 97;
			}
		}
		else{ //other symbols remain the same
			charCode=text.charCodeAt(i);
		}

		
		newText+=String.fromCharCode(charCode);
	}
	return newText;
}
attackEng('hwem aqw dkvej cuu pkiic')

function attackEng(text){
	let englishLettersProbabilities = [0.073, 0.009, 0.030, 0.044, 0.130, 0.028, 0.016, 0.035, 0.074,
	0.002, 0.003, 0.035, 0.025, 0.078, 0.074, 0.027, 0.003,
	0.077, 0.063, 0.093, 0.027, 0.013, 0.016, 0.005, 0.019, 0.001];
	let expectedLettersFrequencies = englishLettersProbabilities.map(probability => probability * text.length);
	console.log(expectedLettersFrequencies)
}


});