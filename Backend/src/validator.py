from MySQLEngine import *
from mail_manager import *
import random

class validator:

    def __init__(self):
        self.SQLEngine = MySQLEngine()
        self.SQLEngine.start()
    
    def Login_validator(self, mail, password):
        result = { "Session": "", "Data": [] }
        user = self.SQLEngine.db_select(f"SELECT * FROM user WHERE email = '{mail}';")
        if user:
            if user[0]["password"] == password: 
                if user[0]["validated"] == 1:
                    result["Session"] = 1
                    result["Data"] = user
                else:
                    result["Session"] = 2
                    result["Data"] = []
            else:
                result["Session"] = 3
                result["Data"] = []
        else:
            result["Session"] = 4
            result["Data"] = []
        
        return result
    
    def insert_user(self, name, last_name, email, password):
        query = f"INSERT INTO user (`name`, last_name, email, `password`) VALUES ('{name}','{last_name}','{email}','{password}')"
        result_id = self.SQLEngine.db_insert(query)

        input_1 = "{:02d}".format(random.randint(0, 99))
        input_2 = "{:02d}".format(random.randint(0, 99))
        input_3 = "{:02d}".format(random.randint(0, 99))
        input_4 = "{:02d}".format(random.randint(0, 99))
        
        query = f"INSERT INTO mail_validation (code_1, code_2, code_3, code_4, id_user) VALUES ({input_1}, {input_2}, {input_3}, {input_4}, {result_id})"
        result = self.SQLEngine.db_insert(query)

        mail_content = f"Tu codigo de validacion es: {input_1} - {input_2} - {input_3} - {input_4}\n que disfrutes de Wallet"
        send_mail = mail_sender()
        send_mail.Send(email, "Codigo de validacion Wallet", mail_content)

        if result > 0:
            return { "result": True }
        else:
            return {"result":False}
    
    def validate_mail(self, input_1, input_2, input_3, input_4, email):
        script = f"SELECT id FROM user WHERE email = '{email}'"
        id_user = self.SQLEngine.db_select(script) 
        id_user = id_user[0]["id"]
        print(id_user) 
        mail_validation = self.SQLEngine.db_select(f"select * from mail_validation where id_user = {id_user}")

        print(mail_validation)
        code1 = "{:02d}".format(mail_validation[0]["code_1"]) == input_1
        code2 = "{:02d}".format(mail_validation[0]["code_2"]) == input_2
        code3 = "{:02d}".format(mail_validation[0]["code_3"]) == input_3
        code4 = "{:02d}".format(mail_validation[0]["code_4"]) == input_4

        if code1 and code2 and code3 and code4:
            script = f"UPDATE user SET validated = 1 WHERE id = {id_user}"
            print(script)
            self.SQLEngine.db_update(script)
            return {"result":True}
        else:
            return {"result":False}
