import { Component } from '@angular/core';
import { WarungsatekamuApiService } from './services/warungsatekamu-api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private sateApi: WarungsatekamuApiService) {
    console.log(this.sateApi.warungsatekamuendpoint);
  }

  // check apakah aplikasi offline
  checkIfNetworkOnline(){
    // toast to inform
  }

  // back button
  backButton(){
    //check back button on console

    //tap twice to exit
  }
}
