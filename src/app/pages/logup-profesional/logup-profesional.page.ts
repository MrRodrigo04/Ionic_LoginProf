import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'app-logup-profesional',
  templateUrl: './logup-profesional.page.html',
  styleUrls: ['./logup-profesional.page.scss'],
})
export class LogupProfesionalPage implements OnInit {

  formLogupProfesional: FormGroup;

  constructor(
    private navCtrl: NavController,
    private profService: ProfesionalService,
    public alertCrl: AlertController,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ) { 
    this.formLogupProfesional = this.fb.group({
      'nombres': new FormControl("",Validators.required),
      'apellidos': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'especialidad': new FormControl("",Validators.required),
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async registrarProfesional(){

    //Obtener valores del form
    var form = this.formLogupProfesional.value;

    //Mensaje de caso no válido
    if(this.formLogupProfesional.invalid){
      const alert = await this.alertCrl.create({
        header: 'Faltan datos',
        message: 'Todos los campos son obligatorios',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    //Creación de JSON para nuevo profesional
    var profesional ={
      Nombre: form.nombres,
      Apellido: form.apellidos,
      Correo: form.correo,
      Especialidad: form.especialidad,
      Usuario: form.usuario,
      Contra: form.password
    }

    //uso de POST
    this.profService.postEstudiante(profesional)
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
    /*nuevo cambio*/
  }

}
