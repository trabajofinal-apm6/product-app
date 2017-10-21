import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Registro } from "../../models/registro"; 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {

    //let registro = new Registro("mail11","nombre11","apellidos11","telefono1","clave1");
    //let key : string = firebaseProvider.adicionarRegistro( registro );
    firebaseProvider.addProduct( "-Kwzp6ojLkVVUp9FNBX_", "yuca", "tales", 1, 2, "125.36", "68.57" ); 
  }

 /* ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }*/

}
