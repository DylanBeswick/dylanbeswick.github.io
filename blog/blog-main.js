var blog = JSON.parse($.get('https://dylan5797.github.io/blog/blogdata.json').responseText)
for (x in blog[0]) {
  $('.playground').append('<p>' + blog[0][x]["postName"] + '</p>')
};
