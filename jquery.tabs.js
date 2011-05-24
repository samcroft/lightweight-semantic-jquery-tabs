(function($){
	$.fn.tabs = function() {
		var dlHeight;
		var el;
		el = this;
		
		el.addClass('enhance');
		dlHeight = el.height();

		el.find('dd').hide();
		var current = el.find('dt:first').addClass('current');
		var currentHeight = current.next('dd').show().height();
		el.css('height', dlHeight + currentHeight);

		$('dt a').click(function(e){
			e.preventDefault();

			$(this).parents('dl').find('.current').removeClass('current').next('dd').hide();
			var current = $(this).parent('dt').addClass('current');
			var currentHeight = current.next('dd').show().height();
			el.css('height', dlHeight + currentHeight);	
		});
	}
})(jQuery);