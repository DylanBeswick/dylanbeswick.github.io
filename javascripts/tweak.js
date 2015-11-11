$(".slide").each(function(i, obj) {
    console.log(this)
    var x = this
    if ($('.' + this.class).height() < (window.innerHeight + 45)) {
      $('.' + this.class).css("height", (window.innerHeight + 45).toString().concat('px'))
    }});
