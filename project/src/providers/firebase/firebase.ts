import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Registro } from "../../models/registro";
import { Product } from "../../models/product";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public http: Http, public afd: AngularFireDatabase) { }
  
  adicionarRegistro( registro : Registro ) : string {
    return this.afd.list('/usuarios/').push(registro).key;
  }
  addProduct( llaveusuario : string, name: string, tipo : string, cantidad: number, precio:number, latitud:string, longitud:string ){

    let product = new Product( name, tipo, cantidad, precio, latitud, longitud);
    return this.afd.list('/usuarios/'+llaveusuario+'/products').push(product).key;
  }

}
