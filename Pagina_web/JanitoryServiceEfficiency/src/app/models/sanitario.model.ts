/** Modelo el cual nos permite manipular los sanitarios de cada ZPN. **/
export class Sanitario {
  constructor(
    public id_wc: number,
    public id_area: number,
    public descripcion: string,
    public genero?: number,
    public capacidad?: number,
    public ubicacion?: string


  ){}


}
