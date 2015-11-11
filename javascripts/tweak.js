$(".slide").each(function(i, obj) {
    console.log(obj)
    if ($('.' + obj.class.toString()).height() < (window.innerHeight + 45)) {
      $('.' + obj.class.toString()).css("height", (window.innerHeight + 45).toString().concat('px'))
    }});
