console.log('Hi Norman!')

let colorClick = document.querySelector('#color');
let placeClick = document.querySelector('#place');
let ritualClick = document.querySelector('#ritual');


function color(evt) {
	alert('My favorite color is blue!');
}


function place(evt) {
	alert(`My favorite place is on top of a mountain!`);
}


function ritual(evt) {
	alert('My favorite ritual is waking up early and drinking coffee on the porch!');
}

colorClick.addEventListener('click', color);
placeClick.addEventListener('click', place);
ritualClick.addEventListener('click', ritual);