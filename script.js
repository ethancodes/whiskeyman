jQuery(document).ready(function() {

    var w = window.outerWidth;
    if (w >= 800) {
    
        window.onscroll = function() {
            var y = window.pageYOffset;
            jQuery('.img img').css('margin-top', y * -1);
        }

    }
    
});