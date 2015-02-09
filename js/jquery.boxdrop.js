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

	$.fn.boxdrop = function (drop) {
		drop = drop || toggleSlide;

		var me = this;
		var getDrop = function(me){
			return $(me).find('.box-title').find('.drop-image');
		}

		return this.each(function(){
			var $image = getDrop(this);
			// handle click event
			$image.on('click', function(event){
				// item index
				var i = getDrop(me).index($(this));
				// corresponding box-content
				var $box = $(me).find('.box-content');
				drop($($box[i]));
			});
		});
	}

}) (jQuery);