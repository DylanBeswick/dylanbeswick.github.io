// main.js

// navbar
if (window.location.pathname != '/') {
  $( document ).ready(function() {
    $('body').prepend(`<div class="navbar">
        <dl class="sub-nav">
        	  <span class="navlink logonav"><a href="#front">Dylan Beswick</a></span>
            <span class="navlink"><a href="https://dylanbeswick.github.io/#about">About</a></span>
            <span class="navlink"><a href="https://dylanbeswick.github.io/#coding">Coding</a></span>
            <span class="navlink"><a href="https://dylanbeswick.github.io/#codingprojects">Coding Projects</a></span>
            <span class="navlink"><a href="https://dylanbeswick.github.io/#scratch">Scratch</a></span>
            <span class="navlink"><a href="https://dylanbeswick.github.io/#piano">Piano</a></span>
            <span class="navlink"><a href="https://dylanbeswick.github.io/blog">Blog</a></span>
        </dl>
    </div>`)
})
}
