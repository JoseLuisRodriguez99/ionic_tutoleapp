import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TerminosYCondicionesPage } from '../terminos-ycondiciones/terminos-ycondiciones';

@Component({
  selector: 'page-quieres-ense-ar',
  templateUrl: 'quieres-ense-ar.html'
})
export class QuieresEnseArPage {

  constructor(public navCtrl: NavController) {
  }
  goToTerminosYCondiciones(params){
    if (!params) params = {};
    this.navCtrl.push(TerminosYCondicionesPage);
  }
}
