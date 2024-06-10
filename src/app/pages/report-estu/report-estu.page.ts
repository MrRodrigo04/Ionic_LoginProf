import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReporteEstuService } from 'src/app/services/reporte-estu.service';

@Component({
  selector: 'app-report-estu',
  templateUrl: './report-estu.page.html',
  styleUrls: ['./report-estu.page.scss'],
})
export class ReportEstuPage implements OnInit {

  formReporEstu: FormGroup;

  constructor(
    private navCtrl: NavController,
    private repEService: ReporteEstuService,
    public alertCrl: AlertController,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ) { 
    this.formReporEstu = this.fb.group({
      'asunto': new FormControl("",Validators.required),
      'descripcion': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }


  async NuevoReporteEstu(){
    
  }

}
