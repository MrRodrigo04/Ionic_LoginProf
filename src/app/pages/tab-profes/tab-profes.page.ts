import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-profes',
  templateUrl: './tab-profes.page.html',
  styleUrls: ['./tab-profes.page.scss'],
})
export class TabProfesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  signOff(){
    localStorage.removeItem('pro');
    this.navCtrl.navigateBack('login-profesional');
  }
}
