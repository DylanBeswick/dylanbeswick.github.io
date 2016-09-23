function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
$(document).ready(function(){
	pid = getParameterByName("id")
	if ((parseInt(pid) == NaN) || (pid == "")) {$('.player-target').append("<p>Invalid Project ID</p>"); return}
	$('.player-target').append('<iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/embed/' + pid + '/?autostart=true" frameborder="0" allowfullscreen></iframe>');
});
