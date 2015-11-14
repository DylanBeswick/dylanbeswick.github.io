var blogReq = $.get('https://dylan5797.github.io/blog/blogdata.json')
var blog = JSON.parse(blogReq.responseText)
blog = blog["blog"]
for (x in blog[0]) {
  $('.playground').append('<p>' + blog[0][x]["postName"] + '</p>')
};
