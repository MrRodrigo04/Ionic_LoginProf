import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ProfesionalService } from 'src/app/services/profesional.service';
import { firstValueFrom , throwError } from 'rxjs';

@Component({
  selector: 'app-login-profesional',
  templateUrl: './login-profesional.page.html',
  styleUrls: ['./login-profesional.page.scss'],
})
export class LoginProfesionalPage implements OnInit {

  formLoginProfesional: FormGroup;
  
  constructor(
    private navCtrl: NavController,
    private profService: ProfesionalService,
    public alertCrl: AlertController,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ) {
    this.formLoginProfesional = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }

  async goToChatPendiente(){

    //Obtener valores del form
    var form = this.formLoginProfesional.value;

    //Advertencia a falta de algún campo
    if(this.formLoginProfesional.invalid){
      const alert = await this.alertCrl.create({
        header: 'Faltan datos',
        message: 'Tienes que rellenar campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    //Creación de estructura JSON para login
    var logProfesional = {
      Usuario:  form.usuario,
      Contra: form.password
    }

    //Validación de credenciales
    try{
      const resp = await firstValueFrom(this.profService.loginProfesional(logProfesional));//llamada y transformación del servicio

      if(resp.Usuario && resp.Contra){//¿La respuesta tiene estos campos?

        let pro = [resp.Id_ProfesRegis,resp.Usuario];
        //Borrado de campos
        localStorage.setItem('pro',JSON.stringify(pro));
        this.navCtrl.navigateForward('tab-profes/chat-pendiente'); //Si es así, redirección a pagina
        this.formLoginProfesional.reset();
        
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
      this.formLoginProfesional.reset();
    }
  }

}
