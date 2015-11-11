$(".slide").each(function(i, obj) {
    console.log($(".slide slide1"))
    if ($('.' + obj.className).height() < (window.innerHeight + 45)) {
      $('.' + obj.className).css("height", (window.innerHeight + 45).toString().concat('px'))
    }});
