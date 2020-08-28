import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ImageUrlData } from '../data/Image_data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css']
})
export class ConstellationComponent implements OnInit {

  image$: Observable<string>;
  image: string;

  constructor(private img: ImageService) { }

  ngOnInit(): void {
    ///Image
    let name = 'Draco'
    this.image$ = this.img.getImageUrl(name);
    this.image$.subscribe((res) => {
      this.image = res;
  })
  ///
}

}
