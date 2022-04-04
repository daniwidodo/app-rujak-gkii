import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WarungsatekamuApiService } from 'src/app/services/warungsatekamu-api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home-post-list',
  templateUrl: './home-post-list.component.html',
  styleUrls: ['./home-post-list.component.scss'],
})
export class HomePostListComponent implements OnInit {
  routeId: any;
  title: any;
  image: any;
  data: any;
  postID: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sateApi: WarungsatekamuApiService,
    public loadingController: LoadingController
  ) {

  }

  ngOnInit() {
    this.routeId = this.route.snapshot.paramMap.get('id');
    console.log(this.routeId);

    this.getData();
    // console.log(this.fakeData);
  }

  getData() {

    this.sateApi.getCatDataByID(this.routeId).subscribe(
      async a => {
        // loading on //
        const loading = await this.loadingController.create({
          message: 'Mengambil data dari server',
          duration: 2000
        });
        await loading.present();
        //
        this.data = a;
        this.title = a.title;
        this.image = a.image;
        this.postID = a.postID;
        console.log(a);
        // loading off //
        const { role, data } = await loading.onDidDismiss();

        console.log('Loading dismissed!');
      }
    );

  }

  goToPostDetails(id){
    console.log('go to post-details', id);
  }
}
