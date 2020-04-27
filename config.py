import os
from dotenv import load_dotenv


MAIN_DIR = os.path.abspath(os.path.dirname(__file__))

ENV_FILE = os.path.join(MAIN_DIR, '.env')
load_dotenv(ENV_FILE)

TEMPLATE_FOLDER = os.path.join(MAIN_DIR, 'app/templates')


class Config(object):
    SECRET_KEY = os.getenv('SECRET_KEY')

    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False