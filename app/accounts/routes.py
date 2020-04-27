from flask import render_template
from flask_login import current_user

from app.accounts import bp


@bp.route('/login')
def login():
	return render_template('login.html', current_user=current_user)

@bp.route('/register')
def register():
	return render_template('register.html')