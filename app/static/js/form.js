$(document).ready(function() {
	function workWithFaEye() {
		$('.fa-eye-slash, .fa-eye').off();


		$('.fa-eye-slash').click(function() {
			$('.fa-eye-slash').addClass('fa-eye');
			$('.fa-eye-slash').removeClass('fa-eye-slash');

			$('.fa-eye').css({
				'transform': 'translate(244px, -73px)'
			});

			$(this).parent().find('input[name="password"], input[name="confirm-password"]').attr('type', 'text');

			workWithFaEye();
		});


		$('.fa-eye').click(function() {
			$('.fa-eye').addClass('fa-eye-slash');
			$('.fa-eye').removeClass('fa-eye');

			$('.fa-eye-slash').css({
				'transform': 'translate(243px, -73px)'
			});

			$(this).parent().find('input[name="password"], input[name="confirm-password"]').attr('type', 'password');

			workWithFaEye();
		});
	}

	workWithFaEye();
});