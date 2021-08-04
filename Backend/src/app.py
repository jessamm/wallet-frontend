from datetime import date
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
# import openpyxl
import xlsxwriter
from io import BytesIO
output = BytesIO()
import base64
from MySQLEngine import *
from mail_manager import *
from validator import *
import random
import json

# conexion al sql, encapsula los metodos en el objeto SQEngine
SQLEngine = MySQLEngine()
bv = validator()
SQLEngine.start()

send_mail = mail_sender()

# Instantiation
app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/login": {"origins": "http://localhost:5001"}})

# metodo Login
@app.route('/login', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def login():
  json_data = request.json
  print(json_data)
  result = bv.Login_validator(json_data["email"], json_data["password"])
  print(result)
  return jsonify(result)

@app.route('/create-user', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def createUser():
  json_data = request.json
  result = bv.insert_user(json_data["name"], json_data["last_name"], json_data["email"], json_data["password"])
  return jsonify(result)

@app.route('/mail-validation', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def mail_validation():  
  json_data = request.json
  result = bv.validate_mail(json_data["input_1"], json_data["input_2"], json_data["input_3"], json_data["input_4"],json_data["email"])
  return jsonify(result)
  
# Routes
# Devuelve las metas del usuario en especifico.?=
@app.route('/get-cuentas', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_cuentas():
  json_data = request.json
  user = json_data["id_user"]
  cuentas = SQLEngine.db_select(f"SELECT * FROM bank_account WHERE id_user = '{user}';")
  return jsonify(cuentas)


# Routes
# Devuelve las metas del usuario en especifico.?=
@app.route('/set-cuentas', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def set_cuentas():
  json_data = request.json
  banco = json_data["name_bank_account"]
  date_out = json_data["date_out"]
  validation_digits = json_data["validation_digits"]
  number_account = json_data["number_account"]
  mount = json_data["mount"]
  id_user = json_data["id_user"]
  type_bank =json_data["type_bank"]

  query = f"INSERT INTO bank_account(name_bank_account,date_out,validation_digits,number_account,id_user,mount,type_bank) VALUES ('{banco}','{date_out}','{validation_digits}','{number_account}','{id_user}','{mount}','{type_bank}')"
  result_id = SQLEngine.db_insert(query)
  print(result_id)

  return jsonify(json_data)

# Routes
# Devuelve las metas del usuario en especifico.
@app.route('/get-categories', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_categories():
  categories = SQLEngine.db_select(f"SELECT * FROM categorie;")
  return jsonify(categories)

# Routes
# Devuelve las metas del usuario en especifico.?=
@app.route('/get-pagos', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_pagos():
  json_data = request.json
  user = json_data["id_user"]
  pagos = SQLEngine.db_select(f"SELECT * FROM transaction_line INNER JOIN bank_account ON transaction_line.id_account=bank_account.id INNER JOIN categorie ON transaction_line.id_categorie=categorie.id WHERE transaction_line.id_user = '{user}';")
  #print(pagos)
  return jsonify(pagos)

# Routes
# Devuelve las metas del usuario en especifico.?=
@app.route('/set-pagos', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def set_pagos():
  json_data = request.json
  descripcion = json_data["descripcion"]
  monto = json_data["mount"]
  categoria = json_data["id_categorie"]
  cuenta = json_data["id_account"]
  user = json_data["id_user"]

  query = f"INSERT INTO transaction_line(descripcion,id_categorie,id_account,id_user,mount) VALUES ('{descripcion}','{categoria}','{cuenta}','{user}','{monto}')"
  result_id = SQLEngine.db_insert(query)
  print(result_id)
  return jsonify(json_data)

# Routes
# Devuelve las metas del usuario en especifico.?=
@app.route('/get-metas', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_metas():
  json_data = request.json
  user = json_data["id_user"]
  metas = SQLEngine.db_select(f"SELECT metas.name_meta, metas.descripcion_meta, metas.date_final, categorie.name, metas.monto_meta, bank_account.name_bank_account FROM bank_account INNER JOIN metas ON bank_account.id=metas.id_account INNER JOIN categorie ON metas.id_categorie=categorie.id WHERE metas.id_user = '{user}';")
  #print(metas)
  return jsonify(metas)


# Routes
# Devuelve las metas del usuario en especifico.?=
@app.route('/set-metas', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def set_metas():
  json_data = request.json
  id_user = json_data["id_user"]
  name_meta = json_data["name_meta"]
  descripcion_meta = json_data["descripcion_meta"]
  date_inicio = json_data["date_inicio"]
  date_final = json_data["date_final"]
  monto_meta = json_data["monto_meta"]
  id_categorie = json_data["id_categorie"]
  id_account = json_data["id_account"]
  
  print(json_data)
  query = f"INSERT INTO metas(name_meta, descripcion_meta, date_inicio, date_final, monto_meta, id_categorie, id_user, id_account) VALUES ('{name_meta}','{descripcion_meta}','{date_inicio}','{date_final}','{monto_meta}','{id_categorie}','{id_user}','{id_account}')"
  result_id = SQLEngine.db_insert(query)
  print(result_id)

  return jsonify(json_data)

"""
INSERT INTO metas(descripcion, date_inicio, date_final, monto_meta, id_categorie, id_user, id_account) VALUES ('{descripcion_meta}','{date_inicio}','{date_final}','{monto_meta}','{id_categorie}','{id_user}','{id_account}')"
"""
# Routes
# Devuelve las metas del usuario en especifico.?=
@app.route('/get-dashboard-data', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_dashboard_data():
  json_data = request.json
  user = json_data["id_user"]
  data = SQLEngine.db_select(f"SELECT SUM(bank_account.mount) AS totalIngreso, SUM(transaction_line.mount) AS totalEgreso, SUM(bank_account.mount)-SUM(transaction_line.mount) AS Balance FROM bank_account INNER JOIN transaction_line ON bank_account.id=transaction_line.id_account WHERE (transaction_line.id_user='{user}') AND (bank_account.id_user='{user}');")
  return jsonify(data)



# Devuelve los movimientos recientes?=
@app.route('/get-movimientos-recientes', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_movimientos_recientes():
  json_data = request.json
  user = json_data["id_user"]
  data = SQLEngine.db_select(f"select t.id,t.descripcion,c.`name` as categoria,t.mount,t.date_trans from  categorie as c INNER JOIN transaction_line as t on c.id=t.id_categorie where t.id_user={user} order by t.date_trans DESC limit 10;")
  return jsonify(data)















# Routes
# Devuelve las metas del usuario en especifico.?=
@app.route('/get-goals', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_goals():
  json_data = request.json
  user = json_data["user"]
  goals = SQLEngine.db_select(f"SELECT * FROM goal_line WHERE id_user = '{user}';")
  return jsonify(goals)


# Devuelve los planes del usuario en especifico.?=
@app.route('/get-planning', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_planning():
  json_data = request.json
  user = json_data["user"]
  planning = SQLEngine.db_select(f"SELECT * FROM planning_line WHERE id_user = '{user}';")
  return jsonify(planning)


# inserta una meta nueva al usuario en especifico.?=
@app.route('/set-goals', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def set_goals():
  json_data = request.json
  id_user = json_data.get('id_user')
  date_end = json_data.get('date_end')
  id_categorie = json_data.get('id_categorie')
  mount_limit = json_data.get('mount_limit')
  print('esta es la fecha------->',date_end)
  SQLEngine.db_insert(f"insert into goal_line(id_user,date_end,id_categorie,mount_limit) values ({id_user},'{date_end}',{id_categorie},{mount_limit});;")
  return jsonify(True)


# inserta un plan nueva al usuario en especifico.?=
@app.route('/set-planning', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def set_planning():
  json_data = request.json
  id_user = json_data.get('id_user')
  date_end = json_data.get('date_end')
  id_categorie = json_data.get('id_categorie')
  mount_limit = json_data.get('mount_limit')
  print('esta es la fecha------->',date_end)
  SQLEngine.db_insert(f"insert into planning_line(id_user,date_end,id_categorie,mount_limit) values ({id_user},'{date_end}',{id_categorie},{mount_limit});")
  return jsonify(True)

@app.route('/total-user', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def total_user():
  user = SQLEngine.db_select(f"select * from user;")
  return jsonify(user)


@app.route('/total-binnacle', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def total_binnacle():
  binnacle = SQLEngine.db_select(f"select * from binnacle;")
  return jsonify(binnacle)

@app.route('/account-validation', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def account_validation():
  # json_data = request.json
  # id_user = json_data.get('')
  # SQLEngine.db_update(f"select * from bank_account;")
  return jsonify(True)

  







@app.route('/get-download-excel', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_report_xlsx():
  # wb = openpyxl.Workbook()
  # sheet = wb.create_sheet("DEFAULT")
  # sheet = wb.active
  # sheet.cell(row=1, column=2, value='INSERT')

  # wb.save("EST_RESULT.xlsx")
  # base64_encoded = base64.b64encode(wb).decode('UTF-8')
  # data = {
  #   'workbook': wb
  # }

  # xlsx = io.BytesIO(wb)
  file_data = BytesIO()
  workbook = xlsxwriter.Workbook(file_data)


  sheet = workbook.add_worksheet('Planilla')
  sheet.set_column('A:A', 5)
  sheet.set_column('B:B', 14)
  sheet.set_column('C:C', 14)
  sheet.set_column('D:D', 30)
  sheet.set_column('E:E', 14)
  sheet.set_column('F:F', 50)
  sheet.set_column('G:O', 10)

  bold_center = workbook.add_format({'bold': True})

  sheet.write(0, 0, '010101010101: ',bold_center)

  workbook.close()

  file_data.seek(0)

  base = base64.encodestring(file_data.getvalue())
  print('devuelve------------->',base)
  return (base)

if __name__ == "__main__":
    app.run('0.0.0.0', 5001, debug=True)
