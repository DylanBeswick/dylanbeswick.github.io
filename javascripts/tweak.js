$(".slide").each(function(i, obj) {
    console.log(obj)
    if ($('.' + this.class).height() < (window.innerHeight + 45)) {
      $('.' + this.class).css("height", (window.innerHeight + 45).toString().concat('px'))
    }});
