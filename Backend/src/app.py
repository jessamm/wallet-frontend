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
@app.route('/login', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def login():
  json_data = request.json
  user = json_data["user"]
  password = json_data["password"]

  result = {
    "Session": False,
    "Data": None
  }

  result["Data"] = SQLEngine.db_select(f"SELECT id, name, last_name, email, validated  FROM User WHERE email = '{user}' AND password = '{password}';")
  if len(result["Data"]) > 0:
    result["Session"] = True

  return jsonify(result)


@app.route('/create-user', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def createUser():
  json_data = request.json
  name = json_data["name"]
  last_name = json_data["last_name"]
  email = json_data["email"]
  password = json_data["password"]

  query = f"INSERT INTO User (`name`, last_name, email, `password`) VALUES ('{name}','{last_name}','{email}','{password}')"
  result = SQLEngine.db_insert(query)
  if result > 0:
    return jsonify({"result":"success"})
  else:
    return jsonify({"result":"fail"})

  


if __name__ == "__main__":
    app.run('0.0.0.0', 5001, debug=True)
