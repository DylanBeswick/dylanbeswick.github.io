function callback(data) {
 var blog = data["blog"];
 var ts;
 month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
for (x in blog) {
 ts = blog[x]["timestamp"]
  $('.playground').append('<li class="' + ts + ' blogitem"></li>'); 
  $('.' + ts).append('<a class="blog-link">' + blog[x]["postName"] + '</a>');
  $('.' + ts).append('<p>' + month[ts.slice(4, 6) - 1] + '. ' + ts.slice(6,8))
};

}
$(document).ready(function(){
$.ajax({
     type: 'GET',
     url: 'https://dylan5797.github.io/blog/blogdata.json',
     success: callback
});
});
