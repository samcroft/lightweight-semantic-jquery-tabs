(function($){
	$.fn.tabs = function() {
		this.each(function() {
			var el = $(this);
			el.addClass('enhance');
			var dlHeight = el.height();

			el.find('dd').hide();
			var current = el.find('dt:first').addClass('current');
			var currentHeight = current.next('dd').show().height();
			el.css('height', dlHeight + currentHeight);
		});

		$('dt a').click(function(e){
			e.preventDefault();

			$(this).parents('dl').find('.current').removeClass('current').next('dd').hide();
			var current = $(this).parent('dt').addClass('current');
			var currentHeight = current.next('dd').show().height();
			var dlHeight = $(this).parents('dl').removeAttr('style').height();
			
			$(this).parents('dl').css('height', dlHeight + currentHeight);	
		});
	}
})(jQuery);