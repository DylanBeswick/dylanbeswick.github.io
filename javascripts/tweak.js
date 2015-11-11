var cl = -1
for (x in $(".slide")) {
    cl = '.' + $(".slide")[x].classList[1].toString
    if ($(cl).height() < (window.innerHeight + 45)) {
      $(cl).css("height", (window.innerHeight + 45).toString().concat('px'))
    }});
