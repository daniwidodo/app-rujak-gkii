import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WarungsatekamuApiService } from 'src/app/services/warungsatekamu-api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  cats = [
    { name: 'first'},
    { name: 'second'}
  ];

  catData: any;
  initId: any;

  constructor(private router: Router, private sateApi: WarungsatekamuApiService, private activated: ActivatedRoute ) {

   }

  ngOnInit() {
    this.sateApi.getCategories().subscribe( (catData) => {
      this.catData = catData;
      this.initId = catData[0].catId;
      console.log(this.catData);
      console.log(this.initId);
      this.router.navigate(['homepage/halamanList', this.initId]);
    }) ;

  }

  cat1(){
    this.router.navigate(['homepage/halaman/', this.catData[0].catId]);
    console.log('click 1');
  }
  cat2(){
    this.router.navigate(['homepage/two']);
    console.log('click 2');
  }

  navigateByCategoryId(id){
    this.router.navigate(['homepage/halamanList', id]);
    console.log(id);
  }
}
