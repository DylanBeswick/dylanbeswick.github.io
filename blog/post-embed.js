function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
} 
function callback(data) {
var blog = data
 var ts;
 month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  $('.playground').append('<div class="blog-main style="width:100%"></div>'); 
  $('.blog-main').append('<h1 class="blog-title">' + blog["title"] + '</h1>');
  ts = blog['timestamp']
  $('.blog-main').append('<p style="margin-bottom:25px; color:#555555">' + month[ts.slice(4, 6) - 1] + '. ' + ts.slice(6,8))
  $('.blog-main').append(blog['content'])
}
$(document).ready(function(){
$.ajax({
     type: 'GET',
     url: 'https://dylan5797.github.io/blog/posts/' + getParameterByName("p") + '.json',
     success: callback
});
});
