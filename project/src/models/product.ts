export class Product {

  name: string;
  tipo : string;
  cantidad: number;
  precio:number;
  latitud:string;
  longitud:string;

  constructor( name: string, tipo : string, cantidad: number, precio:number, latitud:string, longitud:string ){
      this.name = name;
      this.tipo = tipo;
      this.cantidad = cantidad;
      this.precio = precio;
      this.latitud = latitud;
      this.longitud = longitud;
  }


}