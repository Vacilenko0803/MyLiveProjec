
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





