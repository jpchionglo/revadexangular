import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {  }

  getImageUrl(name): Observable<string> {

    return this.http.get<ImageUrlData>('imageservicerevadex.azurewebsites.net/api/Image/${name}');

  }

  /* functions for getting planet/star/const info */



}
