function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
} 
function callback(data) {
var blog = JSON.parse(data);
 var ts;
 month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  $('.loader-icon').remove()
  $('body').css('background-color', '#F5F5FF')
  $('.title-wrap').css('text-align', 'center');
  $('.title-wrap').append('<h1 class="blog-title">' + blog["title"] + '</h1>');
  ts = blog['timestamp'];
  $('.title-wrap').append('<p style="margin-bottom:25px; color:#555555">' + month[ts.slice(4, 6) - 1] + '. ' + ts.slice(6,8));
  $('.playground').css('text-align', 'left');
  $('.playground').append(blog['content']);
  $('.blog-title').css('padding-bottom', "5px");
  $('.blog-title').css('font-size', "40px");
  $('.blog-title').css('font-family', "Raleway, serif");
}
$(document).ready(function(){
    $('body').css('background-color', '#FFFFFF')
    $('.playground').append('<img src="https://cloud.githubusercontent.com/assets/13187260/11357268/0a7a0be2-9223-11e5-9832-c2e5bca37e38.gif" class="loader-icon">')
$.ajax({
     type: 'GET',
     url: 'https://raw.githubusercontent.com/Dylan5797/dylan5797.github.io/master/blog/posts/' + getParameterByName("p") + '.json',
     success: callback
});
});
