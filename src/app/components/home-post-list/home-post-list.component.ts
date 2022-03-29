import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WarungsatekamuApiService } from 'src/app/services/warungsatekamu-api.service';

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
    private sateApi: WarungsatekamuApiService
  ) {

  }

  ngOnInit() {
    this.routeId = this.route.snapshot.paramMap.get('id');
    console.log(this.routeId);
    this.sateApi.getCatDataByID(this.routeId).subscribe(
      a => {
        this.data = a;
        this.title = a.title;
        this.image = a.image;
        this.postID = a.postID;
        console.log(a);
      }
    );
  }

  goToPostDetails(id){
    console.log('go to post-details', id);
  }
}
