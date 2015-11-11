$(".slide").each(function(i) {
    console.log(this)
    if (this.height() < (window.innerHeight + 45)) {
      this.css("height", (window.innerHeight + 45).toString().concat('px'))
    }});
