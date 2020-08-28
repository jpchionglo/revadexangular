import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constellation } from '../models/constellation';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class AllconstellationsService {

  obvString: string;

  constructor(private http: HttpClient, private req: RequestService) { }

  getConstellations(): Constellation[] {

    let observe = this.req.getJSON("https://domainserviceapi.azurewebsites.net/api/Constellation");

    observe.subscribe(event => this.obvString = event);
    
    console.log(this.obvString);

    let jObj: any = JSON.parse(this.obvString);

    return <Constellation[]>jObj;

  }

}
