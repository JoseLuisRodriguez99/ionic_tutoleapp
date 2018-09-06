import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { QuieresEnseArPage } from '../pages/quieres-ense-ar/quieres-ense-ar';
import { TerminosYCondicionesPage } from '../pages/terminos-ycondiciones/terminos-ycondiciones';
import { FinanzasPage } from '../pages/finanzas/finanzas';
import { AgregarMTodoDePagoPage } from '../pages/agregar-mtodo-de-pago/agregar-mtodo-de-pago';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { PerfilPage } from '../pages/perfil/perfil';


import { LoginPage } from '../pages/login/login';
import { RegistrarsePage } from '../pages/registrarse/registrarse';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }
  goToOfertas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OfertasPage);
  }
  goToQuieresEnseAr(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuieresEnseArPage);
  }
  goToTerminosYCondiciones(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TerminosYCondicionesPage);
  }
  goToFinanzas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FinanzasPage);
  }
  goToAgregarMTodoDePago(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AgregarMTodoDePagoPage);
  }
  goToAyuda(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AyudaPage);
  }
  goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }
 
}
