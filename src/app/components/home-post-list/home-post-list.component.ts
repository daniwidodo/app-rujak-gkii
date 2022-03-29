import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-post-list',
  templateUrl: './home-post-list.component.html',
  styleUrls: ['./home-post-list.component.scss'],
})
export class HomePostListComponent implements OnInit {

  routeId: any;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeId = this.route.snapshot.paramMap.get('id');
    console.log(this.routeId);
  }

}
