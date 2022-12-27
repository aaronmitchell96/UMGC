from flask import Flask, render_template, redirect, request, flash
# from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet
from forms import AddPet

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_db'
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

connect_db(app)
# toolbar = DebugToolbarExtension(app)

@app.route('/')
def home_page():
    pets = Pet.query.all()
    return render_template('home.html',pets=pets)

@app.route('/add', methods=["GET","POST"])
def add_pet():
    form = AddPet()

    if form.validate_on_submit():
        name = form.name.data
        species = form.species.data
        photo_url = form.photo_url.data
        age = form.age.data
        notes = form.notes.data

        pet = Pet(name=name,species=species,photo_url=photo_url,age=age,notes=notes)
        db.session.add(pet)
        db.session.commit()

        return redirect("/")

    else:
        return render_template(
            "pet_add_form.html", form=form)

@app.route('/<int:id>', methods=["GET","POST"])
def edit_pet(id):
    pet=Pet.query.get_or_404(id)
    form = AddPet(obj=pet)

    if form.validate_on_submit():
        pet.photo_url = form.photo_url.data
        pet.notes = form.notes.data
        pet.available = form.available.data
        db.session.commit()
        return redirect("/")

    else:
        return render_template("edit_pet.html", form=form)

# if __name__ == '__main__':
#     app.run()

