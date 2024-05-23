import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-logup-estudiante',
  templateUrl: './logup-estudiante.page.html',
  styleUrls: ['./logup-estudiante.page.scss'],
})
export class LogupEstudiantePage implements OnInit {

  formLogupEstudiante: FormGroup;
  
  constructor(
    private navCtrl: NavController,
    private estService: EstudianteService,
    public alertCrl: AlertController,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ) { 
    this.formLogupEstudiante = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'correo': new FormControl(null,Validators.email),
      'genero': new FormControl()
    })
  }

  ngOnInit() {
  }

  async registrarEstudiante(){

    //Obtener valores del form
    var form = this.formLogupEstudiante.value;

    //Mensaje en caso no válido
    if(this.formLogupEstudiante.invalid){
      const alert = await this.alertCrl.create({
        header: 'Faltan datos',
        message: 'Tienes que poner un usuario y contraseña',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    //Creación de JSON para nuevo estudiante
    var estudiante = {
      Correo: form.correo,
      Usuario: form.usuario,
      Contra: form.password,
      Genero: parseInt(form.genero)
    }

    //Uso de servicio POST
    this.estService.postEstudiante(estudiante)
    .subscribe( resp => {
      console.log(resp);
    })

    //TOAST de confirmación
    const toast = await this.toastCtrl.create({
      message: 'Se registró correctamente',
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();

    //Redirección a HOME
    this.navCtrl.navigateBack('/home');
  }
}
