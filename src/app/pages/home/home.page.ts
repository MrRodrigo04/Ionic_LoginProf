import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EstudianteResponse } from 'src/app/interfaces/intEstudiantes/EstudianteResponse';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private estService: EstudianteService
  ) {}

  goToLogin(){
    this.navCtrl.navigateForward('/login-profesional');
  }

  goToLogup(){
    this.navCtrl.navigateForward('/logup-profesional');
  }


}



