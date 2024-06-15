import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from '@ionic/angular';
import { ProfesionalResponse } from 'src/app/interfaces/intProfesional/ProfesionalResponse';
import { ProfesionalService } from 'src/app/services/profesional.service';
import { CalificarProfesService } from 'src/app/services/calificar-profes.service';

import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-seleccion-chat',
  templateUrl: './seleccion-chat.page.html',
  styleUrls: ['./seleccion-chat.page.scss'],
})
export class SeleccionChatPage implements OnInit {

  public Profesionales : ProfesionalResponse [] = [];
  public Estudiante = [];

  constructor(
    private navCtrl: NavController,
    private estService: ProfesionalService,
    private calService: CalificarProfesService,
    private socket: Socket,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    //Obtener estudiante logueado de local storage   
    const estu= localStorage.getItem('estu');
    if (estu){
      this.Estudiante = JSON.parse(estu);
    }
    
    //Servicio de profesional (para listar profesionales)
    this.estService.getProfesional()
    .subscribe(Profesional => this.Profesionales.push(...Profesional));
    this.startProgressBar(5);
  }

  startProgressBar(duration: number) {
    const progressBar = document.getElementById('progress-bar') as HTMLIonProgressBarElement;
    let progress = 0;
    const interval = 100; // 100ms interval
    const increment = (interval / (duration * 1000)) * 100;

    const intervalId = setInterval(() => {
      progress += increment;
      if (progress >= 100) {
        progressBar.value = 1;
        clearInterval(intervalId);
        setTimeout(() => {
          progressBar.classList.add('hidden');
        }, 500); // Delay to show 100% before hiding
      } else {
        progressBar.value = progress / 100;
      }
    }, interval);
  }

  
  async presentActionSheet(Profesional: ProfesionalResponse) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Iniciar chat',
          handler: () => {
            this.startChat(Profesional);
          }
        },
        {
          text: 'Calificar',
          handler: () => {
            this.rate(Profesional);
          }
        },
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }

  startChat(Profesional: ProfesionalResponse) {
    // Lógica para iniciar chat
    localStorage.setItem('user-chat',JSON.stringify(this.Estudiante[1]));
    this.socket.connect();
    this.socket.emit('set-nickname', this.Estudiante[1]);
    this.navCtrl.navigateForward(`chat-room`) ;
    console.log("EstuID: ",this.Estudiante[0])
    console.log('Iniciar chat con:', Profesional);
  }


  //Funcion para calificar a un profesional
  async rate(Profesional: ProfesionalResponse) {

    console.log('Calificar a:', Profesional);

    //Alerta de entrada
    const alert = await this.alertCtrl.create({
      header: 'Valorice la atencion',
      inputs: [
        {
          name: 'Calificacion',
          type: 'number',
          placeholder: '1-5',
          min: 1,
          max: 5,
        },
      ],
      buttons: ['OK'],
    });

    await alert.present();
    const { data } = await alert.onDidDismiss();
    const {Calificacion} = data.values;
    if (data && data.values){
           
      var Califica = {
        Id_EstudianteRegis: this.Estudiante[0],
        Id_ProfesRegis: Profesional.Id_ProfesRegis,
        Calificacion: parseInt(Calificacion)
      }

      this.calService.postCalificar(Califica)
      .subscribe( resp => {
        console.log(resp);
      });
    }
  }
}


