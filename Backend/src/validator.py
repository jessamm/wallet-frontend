from MySQLEngine import *

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
                    result["Session"] = "Success"
                    result["Data"] = user
                else:
                    result["Session"] = "NotMailVerifier"
                    result["Data"] = []
            else:
                result["Session"] = "NotPassword"
                result["Data"] = []
        else:
            result["Session"] = "NotExist"
            result["Data"] = []
        
        return result
