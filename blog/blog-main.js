function callback(data) {
 var blog = data["blog"]
for (x in blog[0]) {
  $('.playground').append('<a class="blog-link">' + blog[0][x]["postName"] + '</a>')
};

}
$(document).ready(function(){
$.ajax({
     type: 'GET',
     url: 'https://dylan5797.github.io/blog/blogdata.json',
     success: callback
});
});
