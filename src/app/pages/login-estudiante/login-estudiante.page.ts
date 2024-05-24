import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { firstValueFrom , throwError } from 'rxjs';

@Component({
  selector: 'app-login-estudiante',
  templateUrl: './login-estudiante.page.html',
  styleUrls: ['./login-estudiante.page.scss'],
})
export class LoginEstudiantePage implements OnInit {

  formLoginEstudiante: FormGroup;

  constructor(
    private navCtrl: NavController,
    private estService: EstudianteService,
    public alertCrl: AlertController,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ){ 
    this.formLoginEstudiante = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })
  }

  ngOnInit() {
  }

  async goToSeleccionChat(){

    //Obtener valores del form
    var form = this.formLoginEstudiante.value;

    //Advertencia a falta de algún campo
    if(this.formLoginEstudiante.invalid){
      const alert = await this.alertCrl.create({
        header: 'Faltan datos',
        message: 'Tienes que rellenar campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    //Creación de estructura JSON para login
    var logEstudiante = {
      Usuario:  form.usuario,
      Contra: form.password
    }

    //Validación de credenciales
    try{
      const resp = await firstValueFrom(this.estService.loginEstudiante(logEstudiante));//llamada y transformación del servicio

      if(resp.Usuario && resp.Contra){//¿La respuesta tiene estos campos?

        this.navCtrl.navigateForward('/seleccion-chat'); //Si es así, redirección a pagina

      }else{
        throw new Error('Usuario no encontrado');
      }

    }catch (error){
      //Toast de error
      const toast = await this.toastCtrl.create({
        message: 'Credenciales incorrectas',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      
      //Borrado de campos
      this.formLoginEstudiante.reset();
    }

  }

  
  

}
