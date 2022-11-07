from stories import *
from flask import Flask,request, render_template

app = Flask(__name__)

@app.route('/')
def home():
    words = story.prompts
    return render_template('story.html',words = words)
       
@app.route('/story-result')
def story_result():
    results = request.args
    final_story = story.generate(results)
    return render_template('story-result.html',story=final_story)
    
    