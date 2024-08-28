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
    private actSheCtrl: ActionSheetController
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
      this.barraLoad(5);
    });
  }

  barraLoad(duracion: number) {
    const barra = document.getElementById('progress-bar') as HTMLIonProgressBarElement;
    let progreso = 0;
    const intervalo = 100; // 100ms interval
    const incremento = (intervalo / (duracion * 1000)) * 100;

    const idIntervalo = setInterval(() => {
      progreso += incremento;
      if (progreso >= 100) {
        barra.value = 1;
        clearInterval(idIntervalo);
        setTimeout(() => {
          barra.style.opacity = '0';
          setTimeout(() => {
            barra.style.display = 'none';
          }, 500); // Delay to hide after fading out
        }, 500); // Delay to show 100% before hiding
      } else {
        barra.value = progreso / 100;
      }
    }, intervalo);
  }

  async mostrarActionSheet(estudiante: EstudianteResponse) {
    const actionSheet = await this.actSheCtrl.create({
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
  }

  diagnose(estudiante: EstudianteResponse) {
    // Obtener información de estudiante a diagnosticar
    let estu = [estudiante.Id_EstudianteRegis, estudiante.Usuario];
    localStorage.setItem('estuTemp', JSON.stringify(estu));

    // Redirección a apartado para diagnóstico
    this.navCtrl.navigateForward('diagnostico');
  }
}
