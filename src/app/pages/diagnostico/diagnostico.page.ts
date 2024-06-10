import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { DiagnoticoService } from 'src/app/services/diagnotico.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaResponse } from 'src/app/interfaces/intCategoria/CategoriaResponse';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.page.html',
  styleUrls: ['./diagnostico.page.scss'],
})
export class DiagnosticoPage implements OnInit {

  formDiagnostico: FormGroup;
  public Categorias : CategoriaResponse [] = [];
  public Estudiante = [];

  constructor(
    private navCtrl: NavController,
    private diagService: DiagnoticoService,
    private catService: CategoriaService,
    public alertCrl: AlertController,
    private toastCtrl: ToastController,
    public fb: FormBuilder
  ) { 
    this.formDiagnostico = this.fb.group({
      'userEstu': new FormControl("",Validators.required),
      'categoria': new FormControl("",Validators.required),
      'diagnostico': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
    //Obtener categorias
    this.catService.getCategorias()
    .subscribe(Categoria => this.Categorias.push(...Categoria));

    //Obtener datos de "estudiante temporal" guardado
    const estu = localStorage.getItem('estuTemp');
    if (estu){
      this.Estudiante = JSON.parse(estu);
    }
  }

  async generarDiagnostico(){

    var form = this.formDiagnostico.value;

    if(this.formDiagnostico.invalid){
      const alert = await this.alertCrl.create({
        header: 'Faltan datos',
        message: 'Tienes que rellenar campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }


  }

}
