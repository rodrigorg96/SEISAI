/*
 * ATs.h
 *
 * Created: 28/10/2018 07:18:07 p. m.
 *  Author: RodrigoRG
 *
 * CONEXION: 10 2D 00 06 4D 51 49 73 64 70 03 C2 00 3C 00 07 52 6F 64 72 69 67 6F 00 08 68 6D 63 7A 72 74 76 67 00 0C 67 42 68 76 71 35 61 32 56 69 37 39
 * Publish:  30 0E 00 07 73 65 69 73 61 69 31 45 78 69 74 6F
 */ 


#ifndef ATS_H_
#define ATS_H_
void enviarAT() //comprueba el estado del modulo
{
	envia_cadena_usart("AT");
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
	_delay_ms(1000);
	envia_cadena_usart("AT");
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
	_delay_ms(1000);
}
//Mi sevidor
void ConexionServer() //Establece conexion entre el modulo y el broker en linea
{
	envia_cadena_usart("AT+CIPSTART=");
	envia_caracter_usart(34); //comillas
	envia_cadena_usart("TCP");
	envia_caracter_usart(34); //comillas
	envia_caracter_usart(44); //coma
	envia_caracter_usart(34); //comillas
	envia_cadena_usart("m15.cloudmqtt.com");
	envia_caracter_usart(34); //comillas
	envia_caracter_usart(44); //coma
	envia_cadena_usart("11882");
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
	_delay_ms(3000);
}
/*
//Servidor Zacatecas
void ConexionServer() //Establece conexion entre el modulo y el broker en linea 
{					
	envia_cadena_usart("AT+CIPSTART=");
	envia_caracter_usart(34); //comillas
	envia_cadena_usart("TCP");
	envia_caracter_usart(34); //comillas
	envia_caracter_usart(44); //coma
	envia_caracter_usart(34); //comillas
	envia_cadena_usart("m15.cloudmqtt.com");
	envia_caracter_usart(34); //comillas
	envia_caracter_usart(44); //coma
	envia_cadena_usart("11640");
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
	_delay_ms(3000);
}
*/
//Mi servidor
void ConnectPacket()
{
	envia_cadena_usart("AT+CIPSEND=46");
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
	_delay_ms(1000);
	envia_caracter_usart(0x10);//Empieza Connect
	envia_caracter_usart(0x2C);
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x06);
	envia_caracter_usart(0x4D);
	envia_caracter_usart(0x51);
	envia_caracter_usart(0x49);
	envia_caracter_usart(0x73);
	envia_caracter_usart(0x64);
	envia_caracter_usart(0x70);
	envia_caracter_usart(0x03);
	envia_caracter_usart(0xC2);
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x3C);
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x06);
	envia_caracter_usart(0x53);
	envia_caracter_usart(0x65);
	envia_caracter_usart(0x69);
	envia_caracter_usart(0x73);
	envia_caracter_usart(0x61);
	envia_caracter_usart(0x69);
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x08);
	envia_caracter_usart(0x68);
	envia_caracter_usart(0x6D);
	envia_caracter_usart(0x63);
	envia_caracter_usart(0x7A);
	envia_caracter_usart(0x72);
	envia_caracter_usart(0x74);
	envia_caracter_usart(0x76);
	envia_caracter_usart(0x67);
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x0C);
	envia_caracter_usart(0x67);
	envia_caracter_usart(0x42);
	envia_caracter_usart(0x68);
	envia_caracter_usart(0x76);
	envia_caracter_usart(0x71);
	envia_caracter_usart(0x35);
	envia_caracter_usart(0x61);
	envia_caracter_usart(0x32);
	envia_caracter_usart(0x56);
	envia_caracter_usart(0x69);
	envia_caracter_usart(0x37);
	envia_caracter_usart(0x39);//Termina Connect
	_delay_ms(2000);
}

//Servidor Zacatecas
/*void ConnectPacket()
{
	envia_cadena_usart("AT+CIPSEND=46");
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
	_delay_ms(1000);
	envia_caracter_usart(0x10);//Empieza Connect
	envia_caracter_usart(0x2C);
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x06);
	envia_caracter_usart(0x4D);
	envia_caracter_usart(0x51);
	envia_caracter_usart(0x49);
	envia_caracter_usart(0x73);
	envia_caracter_usart(0x64);
	envia_caracter_usart(0x70);
	envia_caracter_usart(0x03);
	envia_caracter_usart(0xC2);
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x3C);
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x06);
	envia_caracter_usart(0x53);
	envia_caracter_usart(0x65);
	envia_caracter_usart(0x69);
	envia_caracter_usart(0x73);
	envia_caracter_usart(0x61);
	envia_caracter_usart(0x69);
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x08);
	envia_caracter_usart(0x64);//User
	envia_caracter_usart(0x64);//User
	envia_caracter_usart(0x78);//User
	envia_caracter_usart(0x66);//User
	envia_caracter_usart(0x64);//User
	envia_caracter_usart(0x77);//User
	envia_caracter_usart(0x6C);//User
	envia_caracter_usart(0x67);//User
	envia_caracter_usart(0x00);
	envia_caracter_usart(0x0C);
	envia_caracter_usart(0x55);//Pass
	envia_caracter_usart(0x58);//Pass
	envia_caracter_usart(0x54);//Pass
	envia_caracter_usart(0x49);//Pass
	envia_caracter_usart(0x49);//Pass
	envia_caracter_usart(0x44);//Pass
	envia_caracter_usart(0x4B);//Pass
	envia_caracter_usart(0x42);//Pass
	envia_caracter_usart(0x71);//Pass
	envia_caracter_usart(0x54);//Pass
	envia_caracter_usart(0x62);//Pass
	envia_caracter_usart(0x6D);//Pass Termina Connect
	_delay_ms(2000);
}
*/
void publishPacket(char nombre[],int nomLenght,int payLoadLenght,char payLoadString[])
{
	int finalLenght=nomLenght+payLoadLenght+2;	 //Numero total de caracteres sin contar los 2 primeros
	int NumCaracteres=finalLenght+2;			 //Numero total de caracteres en la cadena 
	char NumCaracteresString[16];
	itoa(NumCaracteres,NumCaracteresString,10);
	envia_cadena_usart("AT+CIPSEND=");
	envia_cadena_usart(NumCaracteresString);
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
	_delay_ms(1000);
	envia_caracter_usart(0x30);//Empieza Publish
	envia_caracter_usart(finalLenght);
	envia_caracter_usart(0x00);
	envia_caracter_usart(nomLenght);
	envia_cadena_usart(nombre);
	envia_cadena_usart(payLoadString);
	_delay_ms(1000);
}
void desconectar()//se desconecta del broker en linea
{
	envia_cadena_usart("AT+CIPCLOSE");
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
	_delay_ms(1000);
}
void echoOff()
{
	envia_cadena_usart("ATE0"); //Desactiva el echo
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
	_delay_ms(500);

}
void echoOn()
{
	envia_cadena_usart("ATE1"); //Activa el echo
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line

}
void StationMode()
{
	envia_cadena_usart("AT+CWMODE=1");	
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
}
void AccesPointMode()
{
	envia_cadena_usart("AT+CWMODE=2");	//
	envia_caracter_usart(13);//enter
	envia_caracter_usart('\n');//jump line
}



#endif /* ATS_H_ */