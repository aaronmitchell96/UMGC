# Put your app in here.
from operations import *
from flask import Flask, request



app = Flask(__name__)

@app.route('/add')
def add_opperation():
    return str(add(int(request.args['a']),int(request.args['b'])))

@app.route('/sub')
def sub_opperation():
    return str(sub(int(request.args['a']),int(request.args['b'])))

@app.route('/mult')
def mult_opperation():
    return str(mult(int(request.args['a']),int(request.args['b'])))

@app.route('/div')
def div_opperation():
    return str(div(int(request.args['a']),int(request.args['b'])))

operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div
}

@app.route('/math/<oper>')
def do_math(oper):
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = operators[oper](a,b)

    return str(result)

