from flask import Flask, render_template, request, redirect
from flask_debugtoolbar import DebugToolbarExtension
from forex_python.converter import CurrencyRates, CurrencyCodes
import math
import requests

app = Flask(__name__)

# the toolbar is only enabled in debug mode:
app.debug = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

app.config['SECRET_KEY'] = '123456789'

toolbar = DebugToolbarExtension(app)

valid_conversions = requests.get("https://theforexapi.com/api/latest")

@app.route('/')
def home():
    return render_template('home_page.html')

@app.route('/result')
def result_page():
    print('*****************', valid_conversions.json(),'*************************')
    c = CurrencyRates()
    s = CurrencyCodes()
    converting_from = request.args['from']
    converting_to = request.args['to']
    if (converting_from in valid_conversions.json()['rates'].keys()  
    or converting_from == valid_conversions.json()['base'] 
    and converting_to in valid_conversions.json()['rates'].keys() 
    or converting_to == valid_conversions.json()['base']):
            amount = float(request.args['amount'])
            symbol = s.get_symbol(converting_to)
            result = str("{:.2f}".format(c.convert(converting_from, converting_to, amount)))
            return render_template('result.html',result = result, symbol = symbol)
    else:
       return redirect('/')
    

