import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constellation } from '../models/constellation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient) { }

  getJSON(url: string): Observable<string> {

    return this.http.get(url, {responseType: 'text'});

  }
  
}
