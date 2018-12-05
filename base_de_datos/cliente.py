import pymysql, sys
import paho.mqtt.client as mqtt
from base_datos import DATA_BASE

def on_connect( client, userdata, flags, rc):
    print ("Conectado con el code: " +str(rc))
    ##Se suscribe al tópico ZPN, cambiar en caso de agregar tópicos
    client.subscribe("ZPN/#")
    
def on_message( client, userdata, msg):
	codigo = str(msg.payload)
	try:
		#Conecta a la base de datos en el otro documento
		db = DATA_BASE()
		#Agrega mensaje de registros
		db.agregar_registros(codigo)
	except Exception as e:
		print(e)
		print("------------------------------------")

#Controlador de salida 
def signal_handler(sig, frame):
		print('You pressed Ctrl+C!')
		sys.exit(0)


#Método main, si está llamado desde consola
if __name__ == '__main__':
	#Declaración del cliente
	client = mqtt.Client()
	
	#Asignación de métodos al cliente
	client.on_connect = on_connect
	client.on_message = on_message

	#Conectar el cliente a la instancia de CloudMQTT
	client.username_pw_set("ddxfdwlg", "UXTIIDKBqTbm")
	client.connect("m15.cloudmqtt.com", 11640, 60)
	
	try:
		#Se cicla el hilo para espera de registros
		client.loop_forever()
	except KeyboardInterrupt as e: 
		#Se desconecta el cliente y detiene el hilo en caso que algo falle
		#Para evitar errores
		client.disconnect()
		client.loop_stop()
		print('bye')
		sys.exit()
	#Si se termina normalmente, cerrar conexión y cerrar hilo
	client.disconnect()
	client.loop_stop()
