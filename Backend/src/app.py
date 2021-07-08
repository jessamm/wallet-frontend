from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from MySQLEngine import *
from mail_manager import *
import random
import json

# conexion al sql, encapsula los metodos en el objeto SQEngine
SQLEngine = MySQLEngine()
SQLEngine.start()

send_mail = mail_sender()

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
  print("Data: ",result["Data"])
  
  if len(result["Data"]) > 0 and result["Data"][0]["validated"] == True:
    result["Session"] = True
  else:
    result["Session"] = False

  return jsonify(result)


@app.route('/create-user', methods=['GET','POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def createUser():
  json_data = request.json
  name = json_data["name"]
  last_name = json_data["last_name"]
  email = json_data["email"]
  password = json_data["password"]

  query = f"INSERT INTO User (`name`, last_name, email, `password`) VALUES ('{name}','{last_name}','{email}','{password}')"
  result_id = SQLEngine.db_insert(query)

  print("result_id: ",result_id )

  
  input_1 = random.randint(0, 99)
  input_2 = random.randint(0, 99)
  input_3 = random.randint(0, 99)
  input_4 = random.randint(0, 99)
  query = f"INSERT INTO mail_validation (code_1, code_2, code_3, code_4, fk_id_user) VALUES ({input_1}, {input_2}, {input_3}, {input_4}, {result_id})"
  result = SQLEngine.db_insert(query)

  print("result: ", result)
  mail_content = f"Tu codigo de validacion es: {input_1} - {input_2} - {input_3} - {input_4}\n el id de tu transaccion es: {result}"
  print("mail content: ",mail_content)
  send_mail.Send(email, "Codigo de validacion Wallet", mail_content)

  if result > 0:
    return jsonify({"result":"success", "validation_id": result})
  else:
    return jsonify({"result":"fail"})


@app.route('/mail-validation', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def mail_validation():  
  json_data = request.json
  input_1 = json_data["input_1"]
  input_2 = json_data["input_2"]
  input_3 = json_data["input_3"]
  input_4 = json_data["input_4"]
  id_validation = json_data["id_validation"]

  mail_validation = SQLEngine.db_select(f"SELECT * FROM mail_validation WHERE id = {id_validation}")

  print(mail_validation)

  if mail_validation[0]["code_1"] == input_1 and mail_validation[0]["code_2"] == input_2 and mail_validation[0]["code_3"] == input_3 and mail_validation[0]["code_4"] == input_4:
    user_id = mail_validation[0]["fk_id_user"]
    script = f"UPDATE User SET validated = 1 WHERE id = {user_id}"
    print(script)
    SQLEngine.db_update(script)
    return jsonify({"result":"True"})
  else:
    return jsonify({"result":"fail"})


if __name__ == "__main__":
    app.run('0.0.0.0', 5001, debug=True)
