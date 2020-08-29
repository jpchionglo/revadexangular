import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ImageUrlData } from '../data/Image_data.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  name: string;
  image$: Observable<string>;
  image: string;

  constructor(private img: ImageService) { }

  ngOnInit(): void {
    ///Image
    let name = 'Mercury'
    this.image$ = this.img.getImageUrl(name);
    this.image$.subscribe((res) => {
      this.image = res;
    })
    ///
  }

}
