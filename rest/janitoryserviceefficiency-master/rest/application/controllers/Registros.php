<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH.'/libraries/REST_Controller.php');
use Restserver\libraries\REST_Controller;

/******************************************
* Clase Registros con Servicios Rest     *
* para manipular los registros de los    *
* sanitarios                             *
******************************************/

class Registros extends REST_Controller {

  public function __construct(){

    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Origin: *");

    /** Constructor el cual va a cargar la base de datos **/
    parent::__construct();
    $this->load->database();

  }


  /** Esta función obtiene todos los registros por baño **/
  public function servicio_post($id_wc){
    $query = $this->db->query("INSERT INTO servicio(id_wc) VALUES ('".$id_wc."')");

    $respuesta = array(
      'Error' => FALSE,
      'servicio' => "holi "
    );

    $this->response($respuesta);


    }


    /** Esta función obtiene un entradas en especifico **/
    public function registro_get($wc){
      $query = $this->db->query(
        "SELECT wcc.id_wc, IFNULL(wwc.registros, 0) cantidad FROM WC wcc LEFT JOIN
          (SELECT id_wc, ultimo_servicio, registros, id_area FROM WC wc NATURAL JOIN (
            SELECT r.id_wc, SUM(cantidad) registros, ultimo_servicio FROM REGISTROS r 
              JOIN (SELECT MAX(fecha_servicio) ultimo_servicio, id_wc FROM servicio GROUP BY id_wc) fechas
              ON r.id_wc=fechas.id_wc WHERE r.fecha_conteo > fechas.ultimo_servicio group BY r.id_wc) otro
              WHERE id_area='".$wc."') wwc
            ON wcc.id_wc = wwc.id_wc WHERE wcc.id_area = '".$wc."' ORDER BY id_wc"
        
      );

      $respuesta = array(
        'Error' => FALSE,
        'registro' => $query->result_array()
      );

      $this->response($respuesta);


    }
}
