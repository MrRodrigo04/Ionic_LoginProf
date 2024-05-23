import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login-profesional',
  templateUrl: './login-profesional.page.html',
  styleUrls: ['./login-profesional.page.scss'],
})
export class LoginProfesionalPage implements OnInit {

  formLoginProfesional: FormGroup;
  
  constructor(
    private navCtrl: NavController,
    public fb: FormBuilder
  ) {
    this.formLoginProfesional = this.fb.group({
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

  goToChatPendiente(){
    this.navCtrl.navigateForward('/chat-pendiente');
  }

}
