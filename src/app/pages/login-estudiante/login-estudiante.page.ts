import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login-estudiante',
  templateUrl: './login-estudiante.page.html',
  styleUrls: ['./login-estudiante.page.scss'],
})
export class LoginEstudiantePage implements OnInit {

  formLoginEstudiante: FormGroup;

  constructor(
    private navCtrl: NavController,
    public fb: FormBuilder
  ){ 
    this.formLoginEstudiante = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })
  }

  ngOnInit() {
  }

  goToSeleccionChat(){
    this.navCtrl.navigateForward('/seleccion-chat');
  }

  
  

}
