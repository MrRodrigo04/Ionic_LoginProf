import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { EstudianteResponse } from 'src/app/interfaces/intEstudiantes/EstudianteResponse';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-chat-pendiente',
  templateUrl: './chat-pendiente.page.html',
  styleUrls: ['./chat-pendiente.page.scss'],
})
export class ChatPendientePage implements OnInit {

  public estudiantes: EstudianteResponse[] = [];
  public Profesional = [];

  constructor(
    private navCtrl: NavController,
    private estService: EstudianteService,
    private socket: Socket,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    // Obtener profesional logueado
    const pro = localStorage.getItem('pro');
    if (pro){
      this.Profesional = JSON.parse(pro);
    }

    // Servicio para listar estudiantes registrados
    this.estService.getEstudiantes().subscribe(estudiantes => {
      this.estudiantes.push(...estudiantes);
      this.startProgressBar(5); // Iniciar la barra de progreso después de obtener los estudiantes
    });
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
          progressBar.style.opacity = '0';
          setTimeout(() => {
            progressBar.style.display = 'none';
          }, 500); // Delay to hide after fading out
        }, 500); // Delay to show 100% before hiding
      } else {
        progressBar.value = progress / 100;
      }
    }, interval);
  }

  async presentActionSheet(estudiante: EstudianteResponse) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccione',
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
    localStorage.setItem('user-chat', JSON.stringify(this.Profesional[1]));
    this.socket.connect();
    this.socket.emit('set-nickname', this.Profesional[1]);
    this.navCtrl.navigateForward('chat-room');
    console.log("Pro ID: ", this.Profesional[0]);
    console.log('Iniciar chat con:', estudiante);
  }

  diagnose(estudiante: EstudianteResponse) {
    // Obtener información de estudiante a diagnosticar
    let estu = [estudiante.Id_EstudianteRegis, estudiante.Usuario];
    localStorage.setItem('estuTemp', JSON.stringify(estu));

    // Redirección a apartado para diagnóstico
    this.navCtrl.navigateForward('diagnostico');

    console.log('Diagnosticar a:', estudiante);
  }
}
