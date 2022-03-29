import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WarungsatekamuApiService {
  warungsatekamuendpoint =
    'https://www.warungsatekamu.org/wp-json/wp/v2/tags?orderby=count&order=desc&per_page=6';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.warungsatekamuendpoint).pipe(
      map(
        (actions: any) => actions.map(
            a => {
              const catId = a.id;
              const catName = a.name;
              console.log(catId, catName);
              return { catId, catName};
            }
          )
      )
    );

  }

  getCategory01(){

  }
}
