from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, IntegerField, SelectField, RadioField
from wtforms.validators import InputRequired, URL, Optional, NumberRange

class AddPet(FlaskForm):
    """form for adding pets"""
    name = StringField("Pet Name")
    species = SelectField("Species",choices=[("cat","cat"),("dog","dog"),("porc","porcupine")])
    photo_url = StringField("Photo URL",validators=[Optional(),URL(message="must be valid URL!")])
    age = IntegerField("Age", validators=[NumberRange(min=0,max=30,message="Enter a number between 0 and 30")])
    notes = StringField("Notes")
    available = RadioField("Available",choices=[("y","yes"),("n","no")])