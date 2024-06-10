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
  public Profesional = [];

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

    //Obtener datos de profesional logueado
    const pro = localStorage.getItem('pro');
    if (pro){
      this.Profesional = JSON.parse(pro);
    }
  }

  async generarDiagnostico(){

    //Obtener valores de form
    var form = this.formDiagnostico.value;

    //Validaciones de form
    if(this.formDiagnostico.invalid){
      const alert = await this.alertCrl.create({
        header: 'Faltan datos',
        message: 'Tienes que rellenar campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    //JSON para nuevo diagnostico
    var diag = {
      Est_Usuario: form.userEstu,
      Id_Categoria: parseInt(form.categoria),
      Diagnostico: form.diagnostico,
      Id_EstudianteRegis: this.Estudiante[0],
      Id_ProfesRegis: this.Profesional[0]
    }

    //Servicio POST
    this.diagService.postDiagnostico(diag)
    .subscribe(resp => {
      console.log(resp);
    })

    //TOAST de confirmación
    const toast = await this.toastCtrl.create({
      message: 'Diagnostico registrado',
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();

    //Ahorra memoria eliminando datos de estuTemp
    localStorage.removeItem('estuTemp');

    //Redirección a atrás
    this.navCtrl.navigateBack('tab-profes/chat-pendiente');  
  }

}
