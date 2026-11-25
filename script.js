// Check if device has dark theme
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

// carousel scrolling
function scrollInit(carousel) {
	return(setInterval(() => { scrollNext(carousel); }, 6000));
// To stop the execution:
// clearInterval(intervalId);   
}
function scrollNext(carousel) {
	// Current Pos > Width of a single element(16px is half the gap) * (number of elements - 1) - 10(small saftey area)
	// Not using scrollLeftMax becuase only avaiallbe in Firefox
	if(carousel.scrollLeft > ((carousel.clientWidth - 16) * (carousel.children.length - 1)) - 10){
		carousel.scroll(0, 0);
	} else {
		carousel.scrollBy(carousel.clientWidth , 0)
	}
}
function scrollPrev(carousel) {
	if(carousel.scrollLeft < 10){ // The 10 is random
		carousel.scroll(999999, 0); // Go to end
	} else {
		carousel.scrollBy(-carousel.clientWidth, 0)
	}
}



/* document.getElementById("carousel").
Window is width 400, so 400px intivals where the scrolling happens
scroll(x,y)/scrollTo	scroll to that index (will jump to next when a little over 50% there)
scrollLeft				The current position of the scroll
scrollLeftMax			The max position of the scroll
scrollBy(x,y)			Scroll a certain amount, but always jump to next one, even if only 1px added.
						Can have unexpected results if clicked too rapidly
scrollIntoView()		When called on the child element, it jumps to that element */