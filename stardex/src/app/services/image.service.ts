import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor(private req: RequestService) { }

  getImageUrl(name): Observable<string> {
    return this.req.getImageUrl(name);
  }

}
