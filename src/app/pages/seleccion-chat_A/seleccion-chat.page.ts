import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { ProfesionalResponse } from 'src/app/interfaces/intProfesional/ProfesionalResponse';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'app-seleccion-chat',
  templateUrl: './seleccion-chat.page.html',
  styleUrls: ['./seleccion-chat.page.scss'],
})
export class SeleccionChatPage implements OnInit {

  public Profesionales : ProfesionalResponse [] = [];

  constructor(
    private navCtrl: NavController,
    private estService: ProfesionalService,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
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
            this.diagnose(Profesional);
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
    this.navCtrl.navigateForward('/chat-room');
    console.log('Iniciar chat con:', Profesional);
  }

  diagnose(Profesional: ProfesionalResponse) {
    // Lógica para Calificar
    console.log('Calificar a:', Profesional);
  }
}


