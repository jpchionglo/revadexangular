import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageUrlData } from '../data/Image_data.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {  }

  getImageUrl(name: string): Observable<ImageUrlData> {

    return this.http.get<ImageUrlData>('http://imageservicerevadex.azurewebsites.net/api/Image/' + name);

  }


  /* functions for getting planet/star/const info */



}
