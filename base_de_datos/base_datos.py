import pymysql
		
class DATA_BASE:
	#Metodo que inserta los datos a la base de datos
	def agregar_registros(self, mensaje):
		self.cursor()
		#Los mensajes son enviados con el formato:
		#d'ZPN\id_wc;cantidad
		#Aqui se separan
		partes= mensaje.split('\'')[1].split(';')
		#Sentencia de insersion a la bd:
		sql = "INSERT INTO registros(id_wc, cantidad) VALUES (%s,%s);"
		try:
			with self.conn.cursor() as cursor:
				cursor = self.conn.cursor()
				algo = cursor.execute(sql, (int(partes[0]),int(partes[1])))
				self.conn.commit()
		finally:
			self.conn.close()

	"""docstring for DATA_BASE"""
	def cursor(self):
		#Se extraen datos de bd del documento passwd
		with open('passwd') as f:
			self.credentials = [x.strip().split(':') for x in f.readlines()]
		for username,password in self.credentials:
			self.conn = pymysql.connect(host='localhost', user=str(username), password=str(password), db='ino_vla_labs')