
//=================================================================SOBUTUE==================================================================


// let myInputOne = document.querySelector('.input-one')
// let myInputTwo = document.querySelector('.input-two')
// let myBatton = document.querySelector('.button')
// let myTitle = document.querySelector('.title')

// myBatton.addEventListener('click', function(){

// let sumInput = myInputOne.value; 
// let sumReset = myInputTwo.value;
// let result = +sumInput + +sumReset ;


// 	myTitle.innerText = result; 


// })
//=================================================================SOBUTUE==================================================================





//=================================================================CALCULYATOR=============================================================

// let myInputTwo = document.querySelector('.input-two')
// let myInputOne = document.querySelector('.input-one')

// let myBattonPlus = document.querySelector('.button')
// let myBattonMunus = document.querySelector('.button-vuhutanue')
// let myBattonUmnojutb = document.querySelector('.button-ymnojutb')
// let myBattonDelutb = document.querySelector('.button-delutb')
// let myTitle = document.querySelector('.title')
// let clearBatton = document.querySelector('.clear')


// clearBatton.addEventListener('click', function () {

// 	myTitle.innerText = ''
// 	myInputOne.value = ''
// 	myInputTwo.value = ''

// });

// myBattonPlus.addEventListener('click', function () {

// 	let sumInput = parseInt(myInputOne.value) ;
// 	let sumReset = parseInt(myInputTwo.value);

// 	let result = sumInput + sumReset;

// 	myTitle.innerText = result;
// });

// myBattonMunus.addEventListener('click', function () {

// 	let sumInput = myInputOne.value;
// 	let sumReset = myInputTwo.value;

// 	let result = +sumInput - +sumReset;

// 	myTitle.innerText = result;
// });

// myBattonUmnojutb.addEventListener('click', function () {

// 	let sumInput = myInputOne.value;
// 	let sumReset = myInputTwo.value;

// 	let result = +sumInput * +sumReset;

// 	myTitle.innerText = result;
// });

// myBattonDelutb.addEventListener('click', function () {

// 	let sumInput = myInputOne.value;
// 	let sumReset = myInputTwo.value;

// 	let result = +sumInput / +sumReset;

// 	myTitle.innerText = result;
// });

//=================================================================CALCULYATOR=============================================================





//=================================================================IF ELSE==================================================================


// let myInputOne = document.querySelector('.input-one')
// let myBattonRessul = document.querySelector('.button')
// let myTitle = document.querySelector('.title')

// myBattonRessul.addEventListener('click', function(){

// let price = 800 ;
// 	if(myInputOne.value <=7){

// 		myTitle.innerText = 'Вход бесплатный'

// 	}else if (myInputOne.value <= 20){
// 		myTitle.innerText = `цена билета со скидкой 20%: \n${price - (price * 0.2)}`

// 	}else if (myInputOne.value > 20){
// 		myTitle.innerText = `Полная стоимость билета :\n${price}` 
// 	}

// })


//=================================================================IF ELSE==================================================================




//=================================================================Динамическое создание тегов HTML=========================================


// let body = document.querySelector('body')

// let myInput = document.createElement('input')
// myInput.setAttribute('type', 'text')


// let myButton = document.createElement('button')
// myButton.innerText = 'Ressult'


// body.appendChild(myInput)
// body.appendChild (myButton)

//====================================================

// let body = document.querySelector('body')
// let myInput = document.createElement('input')
// myInput.setAttribute('type', 'numbr', 'value')

// let myBattonRessul = document.createElement('button')
// myBattonRessul.innerText = 'Ressultat'

// let myTitle = document.createElement('p')



// body.appendChild(myInput)
// body.appendChild(myBattonRessul)
// body.appendChild(myTitle)

// myBattonRessul.addEventListener('click', function () {

// 	let price = 800;
// 	if (myInput.value <= 7) {

// 		myTitle.innerText = 'Вход бесплатный'

// 	} else if (myInput.value <= 20) {
// 		myTitle.innerText = `цена билета со скидкой 20%: \n${price - (price * 0.2)}`

// 	} else if (myInput.value > 20) {
// 		myTitle.innerText = `Полная стоимость билета :\n${price}`
// 	}
// })

//=================================================================Динамическое создание тегов HTML=========================================






//=================================================================цикл FOR=========================================


// debugger
// let carObj = { name: 'BMW', color: 'red', year: 1985 }

// let body = document.querySelector('body')

// let carName = document.createElement('p')
// carName.innerText = carObj.name

// let carColor = document.createElement('p')
// carColor.innerText = carObj.color

// let carYear = document.createElement('p')
// carYear.innerText = carObj.year


// body.appendChild(carName)
// body.appendChild(carColor)
// body.appendChild(carYear)


//=================================================================цикл FOR=========================================



//=================================================================слфйдер=========================================
// let ofLeft = 0;

// const sliderLine = document.querySelector('.slider-line');


// document.querySelector('.slayder-next').addEventListener('click', function () {

// 	ofLeft = ofLeft - 256;

// 	if (ofLeft < -768) {
// 		ofLeft = -768;
// 	}

// 	sliderLine.style.top= ofLeft + 'px';

// })

// document.querySelector('.slayder-back').addEventListener('click', function () {

// 	ofLeft = ofLeft + 256;

// 	if (ofLeft > 0) {
// 		ofLeft = 0;
// 	}

// 	sliderLine.style.top = ofLeft + 'px';

// })
//=================================================================слайдер=========================================