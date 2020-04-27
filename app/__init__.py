from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_wtf.csrf import CSRFProtect

from config import Config


db = SQLAlchemy()
login_manager = LoginManager()
bcrypt = Bcrypt()
csrf = CSRFProtect()


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    register_blueprints(app)

    init_modules(app)

    return app

def register_blueprints(app):
    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    from app.api import bp as api_bp
    app.register_blueprint(api_bp)

    from app.accounts import bp as accounts_bp
    app.register_blueprint(accounts_bp)

    from app.archive import bp as archive_bp
    app.register_blueprint(archive_bp)

def init_modules(app):
    db.init_app(app)

    login_manager.init_app(app)

    bcrypt.init_app(app)

    migrate = Migrate(app, db)

    manager = Manager(app)
    manager.add_command('db', MigrateCommand)

    csrf.init_app(app)