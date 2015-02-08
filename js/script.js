(function ($){
	// animate box
	function toggleSlide($elem){
		// check if it's visible
		if($elem.css('display') == 'none'){
			$elem.slideDown();
		} else {
			$elem.slideUp();
		}
	}

	$('.drop-image').on('click', function(event){
		// item index
		var i = $('.drop-image').index($(this));
		// corresponding box-content
		var $box = jQuery($('.box-content')[i]);
		toggleSlide($box);
	});

}) (jQuery);