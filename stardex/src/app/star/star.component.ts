import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs';
import { ImageUrlData } from '../data/Image_data.model';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  image$: Observable<string>;
  image: string;

  constructor(private img: ImageService) { }

  ngOnInit(): void {
    ///Image
    let name = 'Mercury'
    this.image$ = this.img.getImageUrl(name);
    this.image$.subscribe((res) => {
      this.image = res;
    ///


    })
  }

}
