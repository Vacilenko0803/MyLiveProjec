
function resul(num){
  document.form.textview.value = document.form.textview.value + num;
}

function clean(){
	document.form.textview.value = '';
}

function beack(){
let exp =	document.form.textview.value
document.form.textview.value = exp.substring(0,exp.length -1)
}

function qeurti(){
	let exp = document.form.textview.value
	if (exp){
		document.form.textview.value = eval(exp)
	} 

	if (Infinity==document.form.textview.value){
		document.form.textview.value = '0'
		
	} 
}


//color=======================================================================================
let inputText = document.querySelector('.input__text')
let outText = document.querySelector('.out__text')

document.querySelector('.button__text').addEventListener('click', () => {
	outText.innerHTML = inputText.value
})

//color=======================================================================================


