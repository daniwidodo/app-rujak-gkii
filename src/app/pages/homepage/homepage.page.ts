import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['homepage/halaman1']);
  }

  cat1(){
    this.router.navigate(['homepage/halaman1']);
    console.log('click 1');
  }
  cat2(){
    this.router.navigate(['homepage/two']);
    console.log('click 2');
  }
}
