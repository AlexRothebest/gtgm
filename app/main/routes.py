from flask import render_template

from app.main import bp


@bp.route('/')
def index():
	return render_template('index.html')


@bp.route('/where-am-i')
def where_am_i():
	return render_template('where_am_i.html')