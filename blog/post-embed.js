function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
} 
function callback(data) {
var blog = JSON.parse(data);
 var ts;
 month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 clearInterval(intr)
  $('.loader-icon').remove()
  $('body').css('background-color', '#F5F5FF')
  $('.title-wrap').css('text-align', 'center');
  $('.title-wrap').append('<h1 class="blog-title">' + blog["title"] + '</h1>');
  ts = blog['timestamp'];
  $('.title-wrap').append('<p style="margin-bottom:25px; color:#555555">' + month[ts.slice(4, 6) - 1] + '. ' + ts.slice(6,8));
  $('.playground').css('text-align', 'left');
  $('.playground').append(blog['content']);
  $('.blog-title').css('padding-bottom', "5px");
  $('.blog-title').css('font-size', "40px");
  $('.blog-title').css('font-family', "Raleway, serif");
}
$(document).ready(function(){
$('.playground').append('<div class="loader-icon" style="height:110px; width:165px; background-color:#F5F5FF"><div class="bar bar1" style="width: 15px; float: left; margin-left: 5px; height: 15.669px; background-color: rgb(9, 221, 153);"></div><div class="bar bar2" style="width: 15px; float: left; margin-left: 5px; height: 65.4654px; background-color: rgb(9, 221, 153);"></div><div class="bar bar3" style="width: 15px; float: left; margin-left: 5px; height: 89.2195px; background-color: rgb(9, 221, 153);"></div><div class="bar bar4" style="width: 15px; float: left; margin-left: 5px; height: 87.5865px; background-color: rgb(9, 221, 153);"></div><div class="bar bar5" style="width: 15px; float: left; margin-left: 5px; height: 97.5797px; background-color: rgb(9, 221, 153);"></div><div class="bar bar6" style="width: 15px; float: left; margin-left: 5px; height: 42.5873px; background-color: rgb(9, 221, 153);"></div><div class="bar bar7" style="width: 15px; float: left; margin-left: 5px; height: 100.896px; background-color: rgb(9, 221, 153);"></div><div class="bar bar8" style="width: 15px; float: left; margin-left: 5px; height: 98.3674px; background-color: rgb(9, 221, 153);"></div></div>')
var i = 0
var p = []
var x = 0
while (x < document.getElementsByClassName("bar").length) {
p.push(Math.random() * 10)
x++
}
function frame() {
i++
for (var c in p) {
    var m = document.getElementsByClassName("bar" + (parseInt(c, 10) + 1))[0].style
    m.height = (Math.abs(Math.sin((i + c / 15) / 10 + p[c]) * 100) + 1).toString() + "px"
}
}
intr = setInterval(frame, 20)
$.ajax({
     type: 'GET',
     url: 'https://raw.githubusercontent.com/Dylan5797/dylan5797.github.io/master/blog/posts/' + getParameterByName("p") + '.json',
     success: callback
});
});
