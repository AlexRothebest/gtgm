from flask import Blueprint

from config import TEMPLATE_FOLDER

bp = Blueprint('accounts', __name__, template_folder=TEMPLATE_FOLDER + '/accounts')

from app.accounts.routes import *