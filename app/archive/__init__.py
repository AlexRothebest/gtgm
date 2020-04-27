from flask import Blueprint

from config import TEMPLATE_FOLDER

bp = Blueprint('archive', __name__, template_folder=TEMPLATE_FOLDER + '/archive')

from app.archive.routes import *