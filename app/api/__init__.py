from flask import Blueprint

from config import TEMPLATE_FOLDER

bp = Blueprint('api', __name__)

from app.api.routes import *