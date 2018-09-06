import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarMTodoDePagoPage } from '../agregar-mtodo-de-pago/agregar-mtodo-de-pago';

@Component({
  selector: 'page-finanzas',
  templateUrl: 'finanzas.html'
})
export class FinanzasPage {

  constructor(public navCtrl: NavController) {
  }
  goToAgregarMTodoDePago(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarMTodoDePagoPage);
  }
}
