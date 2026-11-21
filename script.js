//Check if device has dark theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	let favicon = document.getElementById('icon');
	let favicon_href = favicon.href

	//Check if already using the inverted dark theme icon, if not append 'i' at end.
	//REQUIERMENT: Have have 2 icons one with the asme name as the other
	//but with an appended 'i' at the end. The first name must not end in 'i'
	let index = favicon_href.lastIndexOf('.') - 1;
	if (favicon_href[index] !== 'i') { //if it is not already an inverted image
		//insert 'i' at index (right before the extention)
		favicon.href = favicon_href.slice(0, index + 1) 
			+ 'i' + favicon_href.slice(index + 1);
	}
}
function toggle_menu(element) {
	element = document.getElementById(element);
	if(element.style.display === 'none') {
		element.style.display = 'block';
	} else {
		element.style.display = 'none';
	}
	return(false);
}