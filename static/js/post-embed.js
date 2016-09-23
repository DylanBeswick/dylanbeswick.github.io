function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
} 

function callback(data) {
	clearInterval(intr)
	$('.loader-icon').remove()
	var blog = JSON.parse(data);
	var ts = blog['timestamp'];
	var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	$('.title-wrap').append('<h1 class="blog-title">' + blog["title"] + '</h1>');
	$('.title-wrap').append('<p class="post-timestamp">' + month[ts.slice(4, 6) - 1] + '. ' + ts.slice(6,8));
	$('.playground').append(blog['content']);
}

function callback_error(error_object) {
	clearInterval(intr);
	$('.loader-icon').remove();
	$('.playground').css('text-align', 'center')
	if (error_object.status === 404) {
		$('.playground').append('Post not found.');
	}
	else {
		$('.playground').append('Error loading post. Please try reloading the page.');		
	}
}
function frame() {
	i++
	for (var c in p) {
		var m = document.getElementsByClassName("bar" + (parseInt(c, 10) + 1))[0].style
		m.height = (Math.abs(Math.sin((i + c / 15) / 10 + p[c]) * 100) + 1).toString() + "px"
	}
}

$(document).ready(function(){
	$('.playground').append('<div class="loader-icon" style="height:110px; width:165px; background-color:#F5F5FF"><div class="bar bar1" style="width: 15px; float: left; margin-left: 5px; height: 15.669px; background-color: rgb(9, 221, 153);"></div><div class="bar bar2" style="width: 15px; float: left; margin-left: 5px; height: 65.4654px; background-color: rgb(9, 221, 153);"></div><div class="bar bar3" style="width: 15px; float: left; margin-left: 5px; height: 89.2195px; background-color: rgb(9, 221, 153);"></div><div class="bar bar4" style="width: 15px; float: left; margin-left: 5px; height: 87.5865px; background-color: rgb(9, 221, 153);"></div><div class="bar bar5" style="width: 15px; float: left; margin-left: 5px; height: 97.5797px; background-color: rgb(9, 221, 153);"></div><div class="bar bar6" style="width: 15px; float: left; margin-left: 5px; height: 42.5873px; background-color: rgb(9, 221, 153);"></div><div class="bar bar7" style="width: 15px; float: left; margin-left: 5px; height: 100.896px; background-color: rgb(9, 221, 153);"></div><div class="bar bar8" style="width: 15px; float: left; margin-left: 5px; height: 98.3674px; background-color: rgb(9, 221, 153);"></div></div>')
	i = 0
	p = []
	var x = 0
	while (x < document.getElementsByClassName("bar").length) {
		p.push(Math.random() * 10)
		x++
	}
	intr = setInterval(frame, 20)
	$.ajax({
		 type: 'GET',
		 url: 'https://raw.githubusercontent.com/PolyEdge/polyedge.github.io/master/blog/posts/' + getParameterByName("p") + '.json',
		 success: callback,
		 error: callback_error
	});
});
