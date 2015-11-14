function callback(data) {
 var blog = data["blog"];
 var ts;
 month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
for (x in blog[0]) {
  $('.playground').append('<a class="blog-link">' + blog[0][x]["postName"] + '</a>');
  ts = blog[0][x]["timestamp"]
  $('.playground').append('<p>' + month[ts.slice(4, 6) - 1] + '. ' + ts.slice(6,8))
};

}
$(document).ready(function(){
$.ajax({
     type: 'GET',
     url: 'https://dylan5797.github.io/blog/blogdata.json',
     success: callback
});
});
