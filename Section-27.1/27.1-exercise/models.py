from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    """Connect the database to our Flask app."""

    db.app = app
    db.init_app(app)

# id: auto-incrementing integer
# name: text, required
# species: text, required
# photo_url: text, optional
# age: integer, optional
# notes: text, optional
# available: true/false, required, should default to available


class Pet(db.Model):
    """pet"""

    __tablename__ = 'pets'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text, nullable=False)

    species = db.Column(db.Text, nullable=False)

    photo_url = db.Column(db.Text, nullable = True)

    age = db.Column(db.Integer, nullable = True)

    notes = db.Column(db.Text, nullable = True)

    available = db.Column(db.Text,
                          nullable=False,
                          default='True')

    

