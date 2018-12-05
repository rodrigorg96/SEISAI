<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

class Prueba extends REST_Controller {

  public function __construct(){

    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Origin: *");

    parent::__construct();
    $this->load->database();

  }

  public function index(){
    echo "Hola Mundo!";
  }

  public function obtener_arreglo_get($index = 0){
    if ($index > 2) {
      $respuesta = array('error' => TRUE, 'mensaje'=>'No existe elemento con la posición '.$index);
      $this->response( $respuesta, REST_Controller::HTTP_BAD_REQUEST);

    }else {

      $arreglo = array("manzana", "pera", "piña");
      $respuesta = array('error' => FALSE, 'Fruta'=> $arreglo[$index]);
      $this->response( $respuesta );
    }



    //echo json_encode($arreglo[$index]);

  }

  public function obtener_area_get($area){

    $query = $this->db->query("SELECT * FROM wc WHERE id_area = (SELECT id_area FROM area WHERE nombre_area = '".$area."')");

    $this->response( $query->result()  );
    //echo json_encode( $query->result() );

    }
  }
