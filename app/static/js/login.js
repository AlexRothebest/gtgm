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
    $('#login-form').submit(function(event) {
        event.preventDefault();

        let data = new FormData(this);
        let username = data.get('username');
        let password = data.get('password');
        let rememberMe = data.get('remember-me') == 'remember-me';

        $.ajax({
            url: '/api/login',
            method: 'POST',
            async: true,
            headers: {
                'X-Csrf-Token': csrfToken
            },
            data: {
                username: username,
                password: password,
                rememberMe: rememberMe
            },
            success: function(result) {
                if (result.success) {
                    location.href = '/'
                } else {
                    // $(this).before("<small class='error'>Wrong username or password</small>")
                }
            },
            error: function() {
                alert('Error in AJAX');
            } 
        });
    });
});