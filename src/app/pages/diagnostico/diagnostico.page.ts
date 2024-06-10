import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { DiagnoticoService } from 'src/app/services/diagnotico.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.page.html',
  styleUrls: ['./diagnostico.page.scss'],
})
export class DiagnosticoPage implements OnInit {

  formDiagnostico: FormGroup;

  constructor(
    private navCtrl: NavController,
    private diagService: DiagnoticoService,
    public alertCrl: AlertController,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ) { 
    this.formDiagnostico = this.fb.group({
      
    })
  }

  ngOnInit() {
  }

}
