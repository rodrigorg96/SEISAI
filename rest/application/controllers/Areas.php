<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;


/******************************************
* Clase Areas con Servicios Rest          *
* para manipular todos los sanitarios.    *
*                                         *
******************************************/

class Areas extends REST_Controller {

  public function __construct(){

    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Origin: *");

    /** Constructor el cual va a cargar la base de datos **/
    parent::__construct();
    $this->load->database();

  }


  /** Esta función obtiene todas las áreas **/
  public function index_get(){
    $query = $this->db->query("SELECT * FROM area");
    $respuesta = array(
      'Error' => FALSE,
      'areas' => $query->result_array()
    );

    $this->response($respuesta);


  }
}
