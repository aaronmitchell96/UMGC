from boggle import Boggle
from flask import Flask, render_template, session

app = Flask(__name__)

app.config["SECRET_KEY"] = 'BOGGLE'

boggle_game = Boggle()

@app.route('/', methods=['GET','POST'])
def home():
    new_game = Boggle()
    game_board = new_game.make_board()
    session['game-board'] = game_board
    return render_template('game-board.html', game_board = game_board)

