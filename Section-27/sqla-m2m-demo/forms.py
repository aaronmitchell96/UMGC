from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField
from wtforms.validators import InputRequired

class AddSnackForm(FlaskForm):
    email = StringField("Email")
    name = StringField("Snack Name", validators=[InputRequired(message="Snack name cant be blank!")])
    price = FloatField("Price is USD")
    is_healthy = BooleanField("This is a healthy snack?")
    category = RadioField("Category", choices=[('ic','Ice Cream'),('chips','Potato Chips'),('candy','Candy/Sweets')])

   
class EmployeeForm(FlaskForm):
    
    name = StringField("Employee Name")
    state = StringField("State")
    dept_code = SelectField("Depatment Code")

