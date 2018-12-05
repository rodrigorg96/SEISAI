<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

/******************************************
* Clase Sanitarios con Servicios Rest     *
* para manipular todos los sanitarios.    *
*                                         *
******************************************/

class Sanitarios extends REST_Controller {

  public function __construct(){

    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Origin: *");

    /** Constructor el cual va a cargar la base de datos **/
    parent::__construct();
    $this->load->database();

  }

  /** Esta función obtiene todos los sanitarios de las áreas **/
  public function todos_get(){

    $query = $this->db->query("SELECT * FROM wc ORDER BY id_wc");

    $respuesta = array(
      'Error' => FALSE,
      'todos' => $query->result_array()
    );

    $this->response($respuesta);

    }

    /** Esta función obtiene un sanitario en especifico **/
    public function sanitario_get($wc){
      $query = $this->db->query("SELECT * FROM wc WHERE id_wc = '".$wc."' ORDER BY id_wc");

      $respuesta = array(
        'Error' => FALSE,
        'sanitario' => $query->result_array()
      );

      $this->response($respuesta);


    }

    /** Esta función obtiene los sanitarios por área **/
    public function sanitarios_area_get($wc){

      $query = $this->db->query("SELECT * FROM wc WHERE id_area = (SELECT id_area FROM area WHERE nombre_area = '".$wc."') ORDER BY ID_WC");

      $respuesta = array(
        'error' => FALSE,
        'sanitarios_area' => $query->result_array()
      );

      $this->response($respuesta);


      }




  /** Esta función busca los sanitarios en todas las áreas **/
  public function buscar_get( $termino = "No especifico"){
    $query = $this->db->query("SELECT * FROM wc WHERE id_area LIKE '%".$termino."%'");

    $respuesta = array(
      'error' => FALSE,
      'termino' => $termino,
      'sanitarios' => $query->result_array()
    );

    $this->response($respuesta);

  }

  /** Esta función modifica la capacidad de los sanitarios **/


}
