from flask import Flask,request,render_template, redirect,flash,session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///movies_example'

db = SQLAlchemy()
db.app = app
db.init_app(app)

app.config['SECRET_KEY'] = '12345'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

@app.route('/')
def home_page():
    return '<h1>Hello World</h1>'