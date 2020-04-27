from flask import Blueprint

from config import TEMPLATE_FOLDER

bp = Blueprint('main', __name__, template_folder=TEMPLATE_FOLDER)

from app.main.routes import *