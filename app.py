from flask import Flask, request, render_template
from random import randint
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = '123'
debug = DebugToolbarExtension(app)

@app.route('/')
def home_page():
    return render_template('hello.html')

@app.route('/hello')
def say_hello():
    return render_template('hello.html')

@app.route('/goodbye')
def say_bye():
    return "GOODBYE!!!"

@app.route('/search')
def search():
    term = request.args['term']
    sort = request.args['sort']
    print(request.args)
    return f"<h1>Search Results For: {term}</h1> <p>Sorting by {sort}</p>"

# @app.route('/post',methods=['POST'])
# def post_demo():
#     return "YOU MADE A POST REQUEST"

@app.route('/add-comment')
def add_comment_form():
    return """
    <h1>Add Comment</h1>
        <form method='POST'>
            <input type='text' placeholder='comment' name='comment'/>
             <input type='text' placeholder='username' name='username'/>
            <button>Submit</button>
        </form>
    """

@app.route('/add-comment',methods=["POST"])
def save_comment():
    comment = request.form["comment"]
    username = request.form["username"]
    return f"""
     <h1>SAVED YOUR COMMENT<h1>
     <ul>
        <li>Username: {username}</li>
        <li>Comment: {comment}</li>
     </ul>
     """

@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f"<h1>Browsing The {subreddit} Subreddit</h1>"


POSTS = {
    1: "I like chicken tenders",
    2: "I hate mayo!",
    3: "Double rainbow all the way",
    4: "YOLO OMG (kill me)"
}

@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS[id]
    return f"<p>{post}</p>"

@app.route('/lucky')
def luck_number():
    num = randint(1,10)
    return render_template('lucky.html', lucky_num = num)

@app.route('/form')
def show_form():
    return render_template("form.html")

@app.route('/greet')
def get_greeting():
    username = request.args.get('username')
    return render_template("greet.html", username = username)

@app.route('/spell/<word>')
def spell_word(word):
    caps_word = word.upper()
    return render_template('spell_word.html',word=caps_word)
