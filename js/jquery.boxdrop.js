(function ($) {
    // animate box
    function toggleSlide($elem) {
        // check if it's visible
        $elem.slideToggle();
    }
    
    $.fn.boxdrop = function (drop) {
        drop = drop || toggleSlide;
        return this.each(function () {
            $(this).on('click', '.drop-image', function(event) {
                event.preventDefault();
                drop($(this).closest('.box').find('.box-content'));
            });
        });
    }
})(jQuery);