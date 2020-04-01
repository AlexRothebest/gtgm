from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
@app.route('/python')
def python():
	return render_template('python.html')


@app.route('/javascript')
def javascript():
	return render_template('javascript.html')


@app.route('/html')
def html():
	return render_template('html.html')


if __name__ == '__main__':
	app.run(debug=True)