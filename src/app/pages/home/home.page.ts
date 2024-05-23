import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EstudianteResponse } from 'src/app/interfaces/EstudianteResponse';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  // public estudiantes: EstudianteResponse[] = [];
  
  constructor(
    private navCtrl: NavController,
    private estService: EstudianteService
  ) {}

  goToLogin(){
    this.navCtrl.navigateForward('/login');
  }

  goToLogup(){
    this.navCtrl.navigateForward('/logup');
  }

  ngOnInit() {
    // this.estService.getEstudiantes()
    // .subscribe( estudiantes => this.estudiantes.push(...estudiantes));
  }

}
