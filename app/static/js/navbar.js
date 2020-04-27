$(document).ready(function() {
	$('li.dropdown').hover(
		function() {
			let spans = $(this).find('span').toArray(),
				spanBlock;

			for (let i = 1; i < spans.length; i++) {
				spanBlock = $(spans[i]);

				spanBlock.css({
					width: '180px'
				}).animate({
					top: `${i * 70}px`
				}, 300);
			}
		},

		function() {
			let spans = $(this).find('span').animate({
				top: '0px'
			}, 300);
		}
	);

	$('.nav-link').click(function() {
		window.scrollTo({
			top: $(`#${$(this).attr('link-to')}`).offset().top - 94,
			behavior: 'smooth'
		});
	});
});