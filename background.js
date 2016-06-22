$(document).ready(function() {
    var d_canvas = document.getElementById('canvas');
    var context = d_canvas.getContext('2d');
    var background = document.getElementById('background');
    var overlay = document.getElementById('overlay')
    var start = document.getElementById('start');
    context.drawImage(background, 0, 0, 810, 415);
    context.drawImage(start, 550, 140);

    $('#dragHelper').draggable({
	    scroll: false
    });
    $('#overlay').resizable();

    $('#draw').click(function() {
        var $overlay = $('#overlay');
        var $canvas = $('#canvas');
        var $dragHelper = $('#dragHelper');
        var overlay_x = ($overlay.offset().left + 3) - $canvas.offset().left
        var overlay_y = ($overlay.offset().top + 3) - $canvas.offset().top;
        var tweet = document.getElementById('overlay');

        context.drawImage(overlay, overlay_x, overlay_y, tweet.width, tweet.height);

        $dragHelper.hide();
        $overlay.hide();
        $(this).attr('disabled', 'disabled');
    });
});
