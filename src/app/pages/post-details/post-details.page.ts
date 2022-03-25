import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHomepage(){
    this.router.navigate(['homepage']);
  }

}
