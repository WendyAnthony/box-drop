(function ($){
	function toggleSlide($elem){
		if($elem.css('display') == 'none'){
			$elem.slideDown();
		} else {
			$elem.slideUp();
		}
	}
	$('.drop-image').on('click', function(event){
		var i = $('.drop-image').index($(this));
		var $box = jQuery($('.box-content')[i]);
		toggleSlide($box);
	});

}) (jQuery);