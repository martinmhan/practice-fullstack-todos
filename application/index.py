from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_folder='../static', template_folder='../static')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://martinhan@localhost:5432/todos'

db = SQLAlchemy(app)