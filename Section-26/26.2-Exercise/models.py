from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

#MODELS BELOW
class User(db.Model):
    __tablename__ = 'users'

    def __repr__(self):
        u = self
        return f"<User id={u.id} name={u.first_name} {u.last_name} image-url={u.image_url} "

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    first_name = db.Column(db.String(30),
                           nullable=False)

    last_name = db.Column(db.String(30),
                          nullable=True)

    image_url = db.Column(db.String(),
                          unique=True)
    
class Post(db.Model):
    __tablename__ = 'posts'


    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    title = db.Column(db.String(50),
                           nullable=False)

    content = db.Column(db.Text,
                          nullable=False)

    created_at = db.Column(db.Text,
                          nullable=False)

    user_id = db.Column(db.Integer,
                        db.ForeignKey('users.id'))

