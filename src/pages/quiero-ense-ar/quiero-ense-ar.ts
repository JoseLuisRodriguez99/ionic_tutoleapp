import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReciboDePagoPage } from '../recibo-de-pago/recibo-de-pago';
import { CarnetEstudiantilPage } from '../carnet-estudiantil/carnet-estudiantil';
import { TarjetaProfesionalPage } from '../tarjeta-profesional/tarjeta-profesional';
import { CedulaDNIPage } from '../cedula-dni/cedula-dni';
import { CargaDocumentacionPage } from '../carga-documentacion/carga-documentacion';
import { QuieresEnseArPage } from '../quieres-ense-ar/quieres-ense-ar';
import { TerminosYCondicionesPage } from '../terminos-ycondiciones/terminos-ycondiciones';

@Component({
  selector: 'page-quiero-ense-ar',
  templateUrl: 'quiero-ense-ar.html'
})
export class QuieroEnseArPage {

  constructor(public navCtrl: NavController) {
  }
  goToReciboDePago(params){
    if (!params) params = {};
    this.navCtrl.push(ReciboDePagoPage);
  }goToCarnetEstudiantil(params){
    if (!params) params = {};
    this.navCtrl.push(CarnetEstudiantilPage);
  }goToTarjetaProfesional(params){
    if (!params) params = {};
    this.navCtrl.push(TarjetaProfesionalPage);
  }goToCedulaDNI(params){
    if (!params) params = {};
    this.navCtrl.push(CedulaDNIPage);
  }goToCargaDocumentacion(params){
    if (!params) params = {};
    this.navCtrl.push(CargaDocumentacionPage);
  }goToQuieresEnseAr(params){
    if (!params) params = {};
    this.navCtrl.push(QuieresEnseArPage);
  }goToTerminosYCondiciones(params){
    if (!params) params = {};
    this.navCtrl.push(TerminosYCondicionesPage);
  }
}
