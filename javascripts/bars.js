
var q = 1
while (q < 30) {
	$('.bars-container').append('<div class="bar bar' + q + '" style="width:15px; background-color:#09DD99; float:left; margin-left: 5px"></div>')
	q++
}
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
fr = setInterval(frame, 20)
