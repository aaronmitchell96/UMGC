from surveys import*
from flask import Flask, render_template, redirect, request

app = Flask(__name__)

responses = []

@app.route('/')
def home():
    return render_template('homepage.html',survey = satisfaction_survey)

@app.route('/begin', methods=['POST'])
def start_survey():
    return redirect('/questions/0')


@app.route('/questions/<int:qid>')
def questions(qid):
    question = satisfaction_survey.questions[qid]
    return render_template('questions.html', question = question )
    


    

