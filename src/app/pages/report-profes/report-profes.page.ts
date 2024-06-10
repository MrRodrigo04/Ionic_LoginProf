import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReporteProfesService } from 'src/app/services/reporte-profes.service';

@Component({
  selector: 'app-report-profes',
  templateUrl: './report-profes.page.html',
  styleUrls: ['./report-profes.page.scss'],
})
export class ReportProfesPage implements OnInit {

  formReporPro: FormGroup;
  public Profesional = [];

  constructor(
    private repPService: ReporteProfesService,
    public alertCrl: AlertController,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ) { 
    this.formReporPro = this.fb.group({
      'asunto': new FormControl("",Validators.required),
      'descripcion': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
    const pro= localStorage.getItem('pro');
    if (pro){
      this.Profesional = JSON.parse(pro);
    }
  }

  async NuevoReportePro(){
    var form = this.formReporPro.value;

    if(this.formReporPro.invalid){
      const alert = await this.alertCrl.create({
        header: 'Faltan datos',
        message: 'Debe rellenar los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    var ReporPro = {
      Asunto: form.asunto,
      Descripcion: form.descripcion,
      Id_ProfesRegis: this.Profesional[0]
    }

    this.repPService.postReporPro(ReporPro)
    .subscribe(resp => {
      console.log(resp);
    })

    const toast = await this.toastCtrl.create({
      message: 'Reporte registrado, gracias por su colaboracion',
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();

    this.formReporPro.reset();
  }

}
