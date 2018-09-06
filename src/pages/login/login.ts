import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { RegistrarsePage } from '../registrarse/registrarse';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }
  goToRegistrarse(params){
    if (!params) params = {};
    this.navCtrl.push(RegistrarsePage);
  }
}
