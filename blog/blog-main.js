// blog-main.js Show blog posts on main page. 
function callback(data) {
 var blog = JSON.parse(data)["blog"];
 var ts;
 var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  $('.loader-icon').remove()
  $('body').css('background-color', '#F5F5FF')
for (x in blog) {
 ts = blog[x]["timestamp"]
  $('.playground').append('<li class="' + ts + ' blogitem"></li>'); 
  $('.' + ts).append('<a href="https://dylanbeswick.github.io/blog/post?p=' + ts + '" class="blog-link">' + blog[x]["postName"] + '</a>');
  $('.' + ts).append('<p>' + month[ts.slice(4, 6) - 1] + '. ' + ts.slice(6,8))
};

}
$(document).ready(function(){
$('body').css('background-color', '#FFFFFF')
$('.playground').append('<img src="https://cloud.githubusercontent.com/assets/13187260/11357268/0a7a0be2-9223-11e5-9832-c2e5bca37e38.gif" class="loader-icon">')
$.ajax({
     type: 'GET',
     url: 'https://raw.githubusercontent.com/Dylan5797/dylan5797.github.io/master/blog/blogdata.json',
     success: callback
});
});
