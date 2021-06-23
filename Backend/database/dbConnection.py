"""
    @author zunigandres
    @date 23/06/2021
    @version 1.0
"""
import mariadb
import configparser

class dbConnectionService:

    def __init__(self):
        config = configparser.ConfigParser()
        config.read('database/dbServerConfig.ini')

        self.host = config['mysql']['host']
        self.port = int(config['mysql']['port'])
        self.user = config['mysql']['user']
        self.password = config['mysql']['password']
        self.database = config['mysql']['database']

    def connect(self):     
        try:
            self.connection = mariadb.connect(
                host = self.host,
                port = self.port,
                user = self.user,
                password = self.password,
                database = self.database
            )
            self.cursor = self.connection.cursor()

            print('Connection Stablished')

        except mariadb.Error as e:
            print(f"Error connecting : {e}")


    def query(self,sqlQuery):        
        self.connect()
        self.cursor.execute(sqlQuery)
        result = self.cursor.fetchall()
        self.connection.close()
        return  result
            