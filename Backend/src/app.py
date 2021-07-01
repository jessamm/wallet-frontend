from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from MySQLEngine import *
import json

# conexion al sql, encapsula los metodos en el objeto SQEngine
SQLEngine = MySQLEngine()
SQLEngine.start()

# Instantiation
app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/login": {"origins": "http://localhost:5001"}})

# Routes
@app.route('/login', methods=['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def createUser():
  json_data = request.json
  user = json_data["user"]
  password = json_data["password"]

  result = SQLEngine.db_select(f"SELECT * FROM User WHERE email = '{user}' AND password = '{password}';")
  print(result)


  return jsonify(str(result))


if __name__ == "__main__":
    app.run('0.0.0.0', 5001, debug=True)
