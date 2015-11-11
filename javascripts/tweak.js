$(".slide").each(function(i, obj) {
    console.log(obj)
    if (obj.height() < (window.innerHeight + 45)) {
      obj.css("height", (window.innerHeight + 45).toString().concat('px'))
    }});
