import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageUrlData } from '../data/Image_data.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {  }

  getImageUrl(name: string): Observable<string> {
  
    return this.http.get('http://imageservicerevadex.azurewebsites.net/api/Image/' + name, {responseType: 'text'}) //.pipe(map(function (res) { return res.value } ));

  }


  /* functions for getting planet/star/const info */



}
