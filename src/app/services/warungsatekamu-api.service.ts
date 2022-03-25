import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarungsatekamuApiService {
  warungsatekamuendpoint = 'https://www.warungsatekamu.org/wp-json/wp/v2/tags?orderby=count&order=desc';
  constructor( private http: HttpClient) {

   }

}
