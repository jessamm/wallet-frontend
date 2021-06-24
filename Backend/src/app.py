from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin


# Instantiation
app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/login": {"origins": "http://localhost:5001"}})

# Routes
@app.route('/login', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def createUser():
  print(request.json)
  resp = {
    "peticion": "Inicio de Session",
    "result": True
  }
  return jsonify(str(resp))


if __name__ == "__main__":
    app.run('0.0.0.0', 5001, debug=True)
