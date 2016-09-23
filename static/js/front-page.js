window.onload = function() {
	window.onscroll = function() {
		var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollPos > window.innerHeight) {
			$('.navbar')[0].className = "navbar nav-body";
		}
		else {
			$('.navbar')[0].className = "navbar";
		}
	}
	window.onscroll();
}