// main.js

// navbar
if (window.location.pathname != '/') {
  $(document).ready(function() {
    $('body').prepend(`<div class="navbar-wrapper"><div class="navbar"><div class="nav-inner"><a href="/">Dylan Beswick</a><p class="nav-sep"></p><a href="/writing">Writing</a><p class="nav-sep"></p><a href="https://github.com/PolyEdge">GitHub</a><p class="nav-sep"></p><a href="https://soundcloud.com/dylan-beswick">SoundCloud</a></div></div><img class="nav-img" src="/static/img/navbar-tab.png" width="65px" height="65px"></div>`)
})
}
