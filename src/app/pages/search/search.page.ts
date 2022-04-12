import { Component, OnInit } from '@angular/core';
import { WarungsatekamuApiService } from 'src/app/services/warungsatekamu-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private server: WarungsatekamuApiService) { }

  ngOnInit() {
  }

  getSearchQuery(query)
  {

    const inputValue = query.target.value;
    console.log(inputValue);
    this.server.searchQuery(inputValue).subscribe( e => {
      const v: any = e;
      const l = v.length;
      console.log(l, v);

      if( l === 0 )
      {
        console.log('data kosong');
        // this.noData = true;
        // this.adaData = false;
      } else if ( l > 0) {
        console.log('ada');
        // this.adaData = true;
        // this.noData = false;
      }

      // this.posts = v;
      // console.log(this.posts);
    });
  }

}
