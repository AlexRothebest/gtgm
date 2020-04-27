from flask import render_template

from app.archive import bp


@bp.route('/python')
def python():
	return render_template('python.html')

@bp.route('/javascript')
def javascript():
	return render_template('javascript.html')

@bp.route('/html')
def html():
	return render_template('html.html')