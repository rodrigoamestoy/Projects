'use strict';

let options = {
	'speed': 8000,
	'pause': true,
}

window.addEventListener('DOMContentLoaded', function() {
	let slider = document.querySelector('.display-review');
	let slides = document.querySelectorAll('#review');
    console.log(slides);
	let total  = slides.length;
	let pause  = false;
	
	function pauseSlide(){
		slider.onmouseleave = function(){ pause = false; };
		slider.onmouseenter = function(){ pause = true; };
		return pause;
	}
	
	function slide(){
		if( options.pause && pauseSlide() ) return;
		
		let activeSlide = document.querySelector('.display-review .display-review-curr');
		let prev, curr, next, soon;		
		
		curr = activeSlide;
		prev = activeSlide.previousElementSibling;
		next = activeSlide.nextElementSibling;
		
		if( next != null ){
			soon = next.nextElementSibling == null ? slides[0] : next.nextElementSibling;
		} else {
			next = slides[0];
			soon = slides[1];
		}
		
		if( prev != null ) prev.classList.remove('-prev', '-curr', '-next');
		if( curr != null ) curr.classList.remove('-prev', '-curr', '-next'); curr.classList.add('-prev');
		if( next != null ) next.classList.remove('-prev', '-curr', '-next'); next.classList.add('-curr');
		if( soon != null ) soon.classList.remove('-prev', '-curr', '-next'); soon.classList.add('-next');
	}
	
	let slideTimer = setInterval(function(){
		slide();
	}, options.speed);
}, true);