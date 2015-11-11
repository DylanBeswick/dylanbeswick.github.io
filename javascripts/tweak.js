$(".slide").each(function(i, obj) {
    console.log(obj)
    var x = obj
    if ($('.' + obj.class).height() < (window.innerHeight + 45)) {
      $('.' + obj.class).css("height", (window.innerHeight + 45).toString().concat('px'))
    }});
