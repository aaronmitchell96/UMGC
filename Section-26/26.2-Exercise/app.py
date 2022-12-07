from flask import Flask, request, render_template, redirect, flash, session
from models import db, connect_db, User, Post
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.config['SECRET_KEY'] = "123456789"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
# debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()

@app.route('/')
def home():
    return redirect('/users')

@app.route('/users')
def list_users():
    users = User.query.all()
    return render_template('home.html',users=users)

@app.route('/users/new')
def add_form():
    return render_template('add_form.html')

@app.route('/users/new', methods=["POST"])
def post_form():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    img_url = request.form['img_url']

    new_user = User(first_name=first_name,last_name=last_name,image_url=img_url)
    db.session.add(new_user)
    db.session.commit()

    return redirect('/users')

@app.route('/users/<int:user_id>')
def details_page(user_id):
    user = User.query.get(user_id)
    return render_template("details.html",user=user)

@app.route('/users/<int:user_id>/posts/new')
def add_post(user_id):
    user = User.query.get(user_id)
    return render_template('posts.html',user=user)

@app.route('/users/<int:user_id>/posts/new', methods=["POST"])
def post_post(user_id):
    user = User.query.get(user_id)
    title = request.form['title']
    content = request.form['content']
    created_at = datetime.now()
    
    new_post = Post(title=title,content=content,created_at=created_at,user=user)
    db.session.add(new_post)
    db.session.commit()

    return redirect('/users')
