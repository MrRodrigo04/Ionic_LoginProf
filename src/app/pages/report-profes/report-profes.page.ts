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
  asuntos = ['Chantaje', 'Información errónea', 'Trato inadecuado',
 'Demora de atención', 'Experiencia de usuario deficiente'];
  isOtro = false;

  constructor(
    private repPService: ReporteProfesService,
    public alertCrl: AlertController,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ) {
    this.formReporPro = this.fb.group({
      'asunto': new FormControl("", Validators.required),
      'otroAsunto': new FormControl(""),
      'descripcion': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
    const pro = localStorage.getItem('pro');
    if (pro) {
      this.Profesional = JSON.parse(pro);
    }
  }

  evaluarAsunto(event: any) {
    this.isOtro = event.detail.value === 'otro';
    if (this.isOtro) {
      this.formReporPro.get('otroAsunto')?.setValidators(Validators.required);
    } else {
      this.formReporPro.get('otroAsunto')?.clearValidators();
    }
    this.formReporPro.get('otroAsunto')?.updateValueAndValidity();
  }

  async NuevoReportePro() {
    if (this.formReporPro.invalid) {
      const alert = await this.alertCrl.create({
        header: 'Faltan datos',
        message: 'Debe rellenar los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    const form = this.formReporPro.value;
    const asunto = this.isOtro ? form.otroAsunto : form.asunto;
    const descripcion = form.descripcion;

    const ReporPro = {
      Asunto: asunto,
      Descripcion: descripcion,
      Id_ProfesRegis: this.Profesional[0]
    };

    this.repPService.postReporPro(ReporPro)
      .subscribe(resp => {
        console.log(resp);
      });

    const toast = await this.toastCtrl.create({
      message: 'Reporte registrado, gracias por su colaboración',
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();

    this.formReporPro.reset();
  }
}
