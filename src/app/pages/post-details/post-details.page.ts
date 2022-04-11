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
  postDetailsID: any;
  postDetailsImage: any;
  postDetailsContent: any;
  postDetailsTitle: any;

  constructor(private router: Router, private activated: ActivatedRoute, private sateApi: WarungsatekamuApiService) { }

  ngOnInit() {
    this.postId = this.activated.snapshot.paramMap.get('id');
    console.log(this.postId);
    this.sateApi.getPostDetails(this.postId).subscribe(
      (postDetailsdata: any) => {
        console.log(postDetailsdata);
        this.postDetailsID = postDetailsdata.id;
        // eslint-disable-next-line no-underscore-dangle
        this.postDetailsImage = postDetailsdata._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
        this.postDetailsContent = postDetailsdata.content.rendered;
        this.postDetailsTitle = postDetailsdata.title.rendered;
        console.log(this.postDetailsTitle);
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
