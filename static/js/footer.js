$(document).ready(function() {
	$('footer').hover(
		function() {
			$(this).find('img').animate({
				bottom: '-10px'
			}, 300);
		},
		function() {
			$(this).find('img').animate({
				bottom: '-130px'
			}, 300);
		}
	);
});