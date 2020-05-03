from flask import render_template, redirect
from flask_login import current_user

from app.archive import bp


@bp.route('/archive')
def archive():
	if current_user.is_anonymous:
		return redirect('/login')

	return render_template('archive.html')

@bp.route('/archive/python')
def python():
	if current_user.is_anonymous:
		return redirect('/login')

	return render_template('python.html')

@bp.route('/archive/javascript')
def javascript():
	if current_user.is_anonymous:
		return redirect('/login')

	return render_template('javascript.html')

@bp.route('/archive/html')
def html():
	if current_user.is_anonymous:
		return redirect('/login')

	return render_template('html.html')