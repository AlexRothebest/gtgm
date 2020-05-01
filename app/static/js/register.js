function getCookie(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie !== '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i].trim();
			if (cookie.substring(0, name.length + 1) === (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}


$(document).ready(function() {
    $('#register-form').submit(function(event) {
        event.preventDefault();

        let data = new FormData(this);
        let username = data.get('username');
        let email = data.get('email');
        let password = data.get('password');
        let confirmPassword = data.get('confirm-password');

        if (confirmPassword != password) {
            $('#error-block').text('Passwords don\'t match');
            return;
        }

        $.ajax({
            url: '/api/register',
            method: 'POST',
            async: true,
            headers: {
                'X-Csrf-Token': csrfToken
            },
            data: {
                username: username,
                email: email,
                password: password
            },
            success: function(result) {
                if (result.success) {
                    location.href = '/'
                } else {
                    $('#error-block').text(result.message);
                }
            },
            error: function() {
                alert('Error in AJAX');
            } 
        });
    });
});