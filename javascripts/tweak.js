$(".slide").each(function(i) {
    if (this.height() < (window.innerHeight + 45)) {
      this.css("height", (window.innerHeight + 45).toString().concat('px'))
    }});
