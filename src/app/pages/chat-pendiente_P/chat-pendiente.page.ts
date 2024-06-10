import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { EstudianteResponse } from 'src/app/interfaces/intEstudiantes/EstudianteResponse';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-chat-pendiente',
  templateUrl: './chat-pendiente.page.html',
  styleUrls: ['./chat-pendiente.page.scss'],
})
export class ChatPendientePage implements OnInit {

  public estudiantes: EstudianteResponse[] = [];
  public Categorias = [];
  public Profesional = [];

  constructor(
    private navCtrl: NavController,
    private estService: EstudianteService,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.estService.getEstudiantes()
      .subscribe(estudiantes => this.estudiantes.push(...estudiantes));
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

  async presentActionSheet(estudiante: EstudianteResponse) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Iniciar chat',
          handler: () => {
            this.startChat(estudiante);
          }
        },
        {
          text: 'Diagnosticar',
          handler: () => {
            this.diagnose(estudiante);
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

  startChat(estudiante: EstudianteResponse) {
    // Lógica para iniciar chat
    this.navCtrl.navigateForward('/chat-room');
    console.log('Iniciar chat con:', estudiante);
  }

  diagnose(estudiante: EstudianteResponse) {
    // Lógica para diagnosticar
    console.log('Diagnosticar a:', estudiante);
  }
}
