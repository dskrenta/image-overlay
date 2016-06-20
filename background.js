$(document).ready(function() {
    var d_canvas = document.getElementById('canvas');
    var context = d_canvas.getContext('2d');
    var background = document.getElementById('background');
    var overlay = document.getElementById('overlay')
    context.drawImage(background, 0, 0, 810, 415);

    $('#overlay').draggable();

    $('#draw').click(function() {
        var $overlay = $('#overlay')
        var $canvas = $('#canvas');
        var overlay_x = $overlay.offset().left - $canvas.offset().left
        var overlay_y = $overlay.offset().top - $canvas.offset().top;

        context.drawImage(overlay, overlay_x, overlay_y);

        $overlay.hide();
        $(this).attr('disabled', 'disabled');
    });
});
