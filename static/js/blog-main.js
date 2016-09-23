// blog-main.js Show blog posts on main page. 
function callback(data) {
	clearInterval(intr);
	$('.loader-icon').remove();
	var blog = JSON.parse(data)["blog"];
	var ts;
	var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	for (x in blog) {
		ts = blog[x]["timestamp"];
		$('.playground').append('<li class="' + ts + ' blogitem"></li>'); 
		$('.' + ts).append('<a href="/writing/post?p=' + ts + '" class="blog-link">' + blog[x]["postName"] + '</a>');
		$('.' + ts).append('<p>' + month[ts.slice(4, 6) - 1] + '. ' + ts.slice(6,8));
	};
};

function error_callback() {
	clearInterval(intr);
	$('.loader-icon').remove();
	$('.playground').css('text-align', 'center')
	$('.playground').append('An error occured. Please try refreshing the page.');
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
		 url: 'https://raw.githubusercontent.com/PolyEdge/polyedge.github.io/master/blog/blogdata.json',
		 success: callback,
		 error: error_callback
	});
});
