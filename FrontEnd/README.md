# Guia para montar el Frontend en Linux-Ubuntu

Comenzamos intalando ``nodejs`` que es un entorno de JavaScript que nos permite usar la liberia de ``ReactJS`` para el desarollo del frontend con el siguiente comando.

```bash
sudo apt install nodejs
```
Seguidamente instalamos el instalador de paquetes de Node
```bash
sudo apt install npm
```
ahora nos ubicamos en la ruta ``./Frontend/`` del proyecto para instalas las dependencias que se encuentran en el archivo ``package.json`` con el siguiente comando
```bash
npm install package
sudo npm install -g serve
```
Finamente podemos correr el siguiente comando para lanzar nuestra aplicacion
```bash
npm run build
serve -s build
```