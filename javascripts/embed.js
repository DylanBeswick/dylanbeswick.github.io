function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
$(document).ready(function(){
  $('.player-target').append('<iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/embed/' + getParameterByName("id") + '/?autostart=false" frameborder="0" allowfullscreen></iframe>');
});
