console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('You submitted the form!')
}

function imgHover(evt) {
	alert('Wow, you cute!');
}

let form = document.querySelector('#contact');
let imgAlert = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
imgAlert.addEventListener('mouseover', imgHover);
