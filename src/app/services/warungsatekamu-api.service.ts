import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WarungsatekamuApiService {
  warungsatekamuendpoint = 'https://www.warungsatekamu.org/wp-json/wp/v2/';
  getCatsEndpoint = 'tags?orderby=count&order=desc&per_page=6';
  // https://www.warungsatekamu.org/wp-json/wp/v2/posts?tags=88
  getCatDataEndpoint = 'posts?tags=';
  embed = '&_embed';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http
      .get(this.warungsatekamuendpoint + this.getCatsEndpoint)
      .pipe(
        map((actions: any) =>
          actions.map((a) => {
            const catId = a.id;
            const catName = a.name;
            console.log(catId, catName);
            return { catId, catName };
          })
        ),shareReplay(1)
      );
  }

  getCatDataByID(activatedId) {
    return this.http
      .get(this.warungsatekamuendpoint + this.getCatDataEndpoint + activatedId + this.embed)
      .pipe(
        map((actions: any) =>
          actions.map((a: any) => {
            // const catId = a.id;
            // const catName = a.name;
            // _embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url
            // _embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url
            const title = a.title.rendered;
            // eslint-disable-next-line no-underscore-dangle
            const image = a._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
            const postID = a.id;
            console.log(a);
            return { title, image, postID };
          })
        ),shareReplay(1)
      );
  }

  getPostDetails( postId ){
    return this.http.get( this.warungsatekamuendpoint + 'posts/' + postId + '?_embed')
    // tambah map biar jsonnya bersih
    .pipe(

    );
  }

  // pencarian
  searchQuery( query ){
    return this.http.get( this.warungsatekamuendpoint + 'search' + '?subtype=post&_embed' + '&'  + 'search=' + query)
    .pipe(

    );
  }
}
