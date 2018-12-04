/*
 * intel_v2.c
 *
 * Created: 28/10/2018 06:48:39 p. m.
 * Author : RodrigoRG
 */ 
#define F_CPU 16000000UL	//------>En este proyecto se usó un atmega328 el cual funciona a una frecuencia de 16MHz
#include <avr/io.h>			//************************************************************************//
#include <util/delay.h>		//************************************************************************//
#include <stdlib.h>			//***********************-----Librerias usadas-----***********************//
#include <string.h>			//************************************************************************//
#include <avr/interrupt.h>	//************************************************************************//

							// -----> Clases creadas para su uso en el proyecto; la primera se utiliza para la comunicacion serial
#include "USART.h"			//------- funciona a 115200 bauds y con el microcontrolador a doble velocidad para la optima recepcion de mensajes
							//------- por puerto serial
							
#include "ATs.h"			//esta clase solo facilita el uso de comandos AT
	
char Banho[]="ZPN";			//Esta cadena de caracteres hace referencia a lo que será el topic en mqtt
char ID[]="1";				//El ID será parte del payload que tendra el formato "ID;LECTURAS"
int conteo;					//Esta variable almacenará las lecturas recibidas por el sensor
int BanhoLenght;			//Esta variable tendrá la longitud de caracteres de la cadena que contiene el ID
char conteoString[16]="";		//La variable de conteo se convertirá en cadena de caracteres y se almacenara en esta variable
char payLoad[16]="";			//Lo contenido en esta variable será la informacion que se enviara por mqtt (payload)
int i;						//Variable encargada de detectar el paso de una persona junto con la siguiente variable (Lasti)
int Lasti;
int min;					//Variable relacionada con el tiempo en minutos
char minString[16]="";




int main(void)
{
	
	cli();
    iniciar_usart();				//con esto inicializamos la comunicación serial
	
	BanhoLenght = strlen(Banho);	//Obtenemos la cantidad de caracteres en la cadena
	DDRC |=(1<<PINC0);				//Pin relacionado al led (salida)
	DDRB &=~(1<<PINB0);				//Pin relacionado al boton (entrada)
	PORTB |=(1<<PINB0);				//Pull up del boton
	DDRB &=~(1<<PINB5);				//Pin relacionado con el PIR (entrada)
	PORTB|=(1<<PINB5);				//Pull ups PIR
	i=0;			//**************** *****************************************//
	Lasti=0;		//---------Variables enteras se inicializan en 0-----------//
	min=0;			//*********************************************************//
	conteo=0;		//*********************************************************//
    TCCR1B = 4;		// pre-escalador de 256
    TIMSK1 = 1;		// se activa la interrupcion por time-overflow
    TCNT1 = 3036;
	sei();			//Acviva las interrupciones globales*/
	while (1) 
    {
		if((PINB&(1<<PINB5))==0)
		{
			PORTC&=~(1<<PINC0);		 //si no se detecta movimiento se apaga el led
		}
		else
		{
			PORTC|=(1<<PINC0);		// Si se detecta movimiento se enciende el led
			i++;					// i aumentará cuando el sensor detecte movimiento
		}
		if (Lasti==i && i!=0 && Lasti!=0)	//cuando i y Lasti son iguales significa que ya pasó una persona 
		{
			conteo++;						// Por lo tanto conteo aumentará 
			i=0;							// i regresa a 0 
			Lasti=0;						// Lasti regresa a 0
		}
		Lasti=i;					//Lasti sera igual que i para que al inicio del loop lasti tenga el valor anterior a i
		}
	
}

ISR(TIMER1_OVF_vect)
{
	if (min==60)
	{
	itoa(conteo,conteoString,10);	//el valor entero se pasa a cadena de caracteres
	strcat(payLoad, ID);			// se concatena el payload con el ID mas ; mas el conteo
	strcat(payLoad, ";");
	strcat(payLoad, conteoString);
	ConexionServer();				//Se conecta al Servidor
	ConnectPacket();				//Se conecta al webSocket
	publishPacket(Banho,BanhoLenght,strlen(payLoad),payLoad);//se publica la información
	desconectar();
	memset(payLoad,'\0',strlen(payLoad));//se borra la cadena
	conteo=0;
	min=0;
	}
	
	min++;
	TCNT1 =3036;
}
