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
#SQLEngine.start()

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
  result = bv.Login_validator(json_data["email"], json_data["password"])
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

  





@app.route('/get-categories', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_categories():
  categories = SQLEngine.db_select(f"SELECT * FROM categorie;")
  
  return jsonify(categories)

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
