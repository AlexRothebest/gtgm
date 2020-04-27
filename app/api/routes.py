from flask import request, redirect, jsonify
from flask_login import login_user, logout_user
from sqlalchemy import or_

from app import db, bcrypt
from app.api import bp
from app.models import *


@bp.route('/api/login', methods=['POST'])
def api_login():
    try:
        username = request.form.get('username')
        password = request.form.get('password')
        remember_me = request.form.get('rememberMe')

        user = User.query.filter_by(or_(
            username=username,
            email=username
        )).first_or_404()

        if bcrypt.check_password_hash(user.password):
            login_user(user, remember=remember_me)

            result = {
                'success': True
            }
        else:
            result = {
                'success': False
            }
    except:
        result = {
            'success': False
        }

    return jsonify(result)

@bp.route('/api/register', methods=['POST'])
def api_register():
    try:
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')

        if User.query.filter_by(username=username).count() != 0:
            result = {
                'success': False,
                'reason': 'username',
                'message': 'This username is already taken'
            }
        elif User.query.filter_by(email=email).count() != 0:
            result = {
                'success': False,
                'reason': 'email',
                'message': 'This email is already taken, did you forgot your password?'
            }
        else:
            if len(username) < 4:
                result = {
                    'success': False,
                    'reason': 'username',
                    'message': 'This username is too short'
                }
            elif len(username) > 20:
                result = {
                    'success': False,
                    'reason': 'username',
                    'message': 'This username is too long'
                }
            else:
                new_user = User(
                    username=username,
                    email=email,
                    password_hash=bcrypt.generate_password_hash(password).decode('UTF-8')
                )
                db.session.add(new_user)
                db.session.commit()

                login_user(new_user)

                result = {
                    'success': True
                }
    except:
        result = {
            'success': False
        }

    return jsonify(result)

@bp.route('/api/logout')
def logout():
    logout_user()

    return redirect('/')