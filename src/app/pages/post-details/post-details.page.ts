import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WarungsatekamuApiService } from '../../services/warungsatekamu-api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {

  postId: any;
  data: any;
  constructor(private router: Router, private activated: ActivatedRoute, private sateApi: WarungsatekamuApiService) { }

  ngOnInit() {
    this.postId = this.activated.snapshot.paramMap.get('id');
    console.log(this.postId);
    this.sateApi.getPostDetails(this.postId).subscribe(
      a => {
         this.data = a;
        console.log(this.data);
      }
    );
  }

  goToHomepage(){
    this.router.navigate(['homepage']);
  }

  // back button navigate previous page
  backButton(){

  }

  // check if login
  authCheck(){

  }

  // post comment
  comment(){
    // check if auth true = {local.storage exist} open post-comment modal then refresh page if false redirect to login
  }

}
