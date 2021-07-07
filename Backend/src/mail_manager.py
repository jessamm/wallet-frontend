import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


class mail_sender:
    """ 
        Constructor 
    """
    def __init__(self,configFile='dbServerConfig.ini'):

        # Se recuperan los valores de configuración desde el objeto config
        self.sender_address = 'sqltestmail21@gmail.com'
        self.sender_pass = 'Cusadmin'

    def Send(self, to, subject, contend):    
        
        #Setup the MIME
        message = MIMEMultipart()
        message['From'] = self.sender_address
        message['To'] = to
        message['Subject'] = subject   #Asunto
        #The body and the attachments for the mail
        message.attach(MIMEText(contend, 'plain'))
        #Create SMTP session for sending the mail
        session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
        session.starttls() #enable security
        session.login(self.sender_address, self.sender_pass) #login with mail_id and password
        text = message.as_string()
        session.sendmail(self.sender_address, to, text)
        session.quit()