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
