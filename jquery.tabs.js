(function($){
	$.fn.tabs = function() {
		this.each(function() {
			var el = $(this);
			var current;
			
			el.addClass('enhance');
			var dlHeight = el.height();

			el.find('dd').hide();
			
			var hash = location.hash;
			
			var hasHash = el.find('a[href="'+hash+'"]');
			if (hasHash.length) {
				current = el.find('a[href="'+hash+'"]').parent().addClass('current');
			} else {
				current = el.find('dt:first').addClass('current');
			}
			
			var currentHeight = current.next('dd').show().height();
			el.css('height', dlHeight + currentHeight);
		});


		$('dl.enhance dt a').click(function(e){
			e.preventDefault();

			$(this).parents('dl').find('.current').removeClass('current').next('dd').hide();
			var current = $(this).parent('dt').addClass('current');
			var currentHeight = current.next('dd').show().height();
			var dlHeight = $(this).parents('dl').removeAttr('style').height();
			
			$(this).parents('dl').css('height', dlHeight + currentHeight);
			
			location.hash = $(this).attr('href');
		});
	}
})(jQuery);