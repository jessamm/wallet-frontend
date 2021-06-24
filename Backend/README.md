# Guia para montar el Backend en Linux-Ubuntu

Primero debemos verificar que este instalado Python3 por defecto esta incluido en las ultimas versiones de linux, si no procedemos a instalarlo con el siguiente comando.

```bash
sudo apt install python3
```
seguidamente instalamos el **Python Install Package** pip con el siguiente comando para agregar los paquetes que necesita nuestro programa.

```bash
sudo apt install python3-pip
```
Finalemente instalamos el paquete **virtualenv** para crear un entorno virtual donde trabajaremos con nuestro proyecto.

```bash
sudo apt install python3-virtualenv
```
con todo lo anterior instalado procedemos a crear en entorno virtual de nombre **venv** pero primero nos ubicamos en la ruta ``./Backend/`` del proyecto

```bash
virtualenv venv
```
corremos el **venv** con el siguiente comando

```bash
source venv/bin/activate
```

ahora sin cambiarnos de la ruta ``./Backend/`` del proyecto instalamos las dependencias del proyecto que se encuentran en el archivo ``requirements.txt`` haciendo uso del siguiente comando
```bash
pip install -r requirements.txt
```

finalmente vamor a la ruta ``./Backend/src/`` del proyecto y corremos el programa. 
``` bash
python3 app.py
```