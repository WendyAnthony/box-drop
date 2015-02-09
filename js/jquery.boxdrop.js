(function ($) {
    // define plugin
    $.fn.boxdrop = function (drop) {
        drop = drop || function(e){
            e.slideToggle();
        }
        return this.each(function () {
            $(this).on('click', '.drop-image', function(event) {
                event.preventDefault();
                drop($(this).closest('.box').find('.box-content'));
            });
        });
    }
})(jQuery);