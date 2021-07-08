# -*- codig:utf8 -*-
# Para instalar el conector de mysql en python
# sudo -H pip3 install mysql-connector-python ---------windows
# pip install mysql-connector-python ------------- ubunto 20
import mysql.connector
from mysql.connector.cursor import MySQLCursor
import configparser

"""
    La clase MySQLEngine gestiona las conexiones y las consultas realizadas a la base de datos especificada
    por el archivo config.ini el cual es configurable para establecer conexiones a diferentes bases de datos
    y diferentes usuarios.
"""
class MySQLEngine:

    """ 
        Constructor 
    """
    def __init__(self,configFile='dbServerConfig.ini'):
        config = configparser.ConfigParser()

        # Se lee el archivo de configuración config.ini
        config.read('%s' % configFile)

        # Se recuperan los valores de configuración desde el objeto config
        self.host = config.get('mysql','host')
        self.port = config.get('mysql','port')
        self.user = config.get('mysql','user')
        self.password = config.get('mysql','password')
        self.database = config.get('mysql','database')

    """
        start es la función que comienza o establece la conexión hacia la base de datos especificada en el constructor.
    """
    def start(self):

        try:
            self.conector = mysql.connector.connect(
                host = self.host,
                port = self.port,
                user = self.user,
                password = self.password,
                database = self.database
            ) 
            self.link = self.conector.cursor()

            print("Established Connection in: %s" % self.conector)

        except Error as e:
            print("Error Establishing Connection: %s " % e)

    """
        select es la función encargada de realizar las consultas requeridas.
        @param query: Es una consulta SQL.
    """
    
    def create_table(self):
        sql_file = open('C:\Django\database.sql', 'r')
        
        self.link.execute(sql_file.read())
        self.conector.commit()
        self.link.lastrowid
        print('crea la base de datos'*100)
    
    def select(self,query,fetchOne=False):        
        self.link.execute(query)
        
        # print('este es el resultado----------------->', self.link.fetchall())
        data = self.link.fetchall()
        if fetchOne:
            return self.link.fetchone()
        else:
            return data 

    def db_select(self, query, fetchOne=False):
        self.link.execute(query)
        row_headers=[x[0] for x in self.link.description] #this will extract row headers
        rv = self.link.fetchall()
        if len(rv) > 0:
            json_data=[]
            for result in rv:
                json_data.append(dict(zip(row_headers,result)))
            return json_data
        else:
            return []

    def db_insert(self,query):
        self.link.execute(query)
        self.conector.commit()
        print("Data Inserted Successfully")
        return self.link.lastrowid

    def db_update(self,query):
        self.link.execute(query)
        self.conector.commit()
        print("Data Inserted Successfully")

    def callProcedure(self,name,*args):
        return self.link.callproc(name,args)


    """
        close cierra la conexión hacia la base de datos.
    """
    def close(self):
        if self.conector.is_connected():
            self.link.close()
            self.conector.close()
            print("Connection Closed")