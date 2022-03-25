import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-post-cat2',
  templateUrl: './home-post-cat2.component.html',
  styleUrls: ['./home-post-cat2.component.scss'],
})
export class HomePostCat2Component implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}

  goToPostDetails(){
    console.log('post-details');
    this.router.navigate(['post-details/3']);
  }

}
