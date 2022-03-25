import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarungsatekamuApiService {
  warungsatekamuendpoint = '';
  constructor( private http: HttpClient) {
    console.log(this.warungsatekamuendpoint);
   }

}
