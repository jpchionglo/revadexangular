import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Oberservable } from 'rxjs';
import { ImageUrlData } from '../data/Image_data.model';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  image$: Observable<ImageUrlData>;
  image: ImageUrlData;

  constructor(private img: ImageService) { }

  ngOnInit(): void {
    ///Image
    this.image$ = this.img.getImageUrl();
    this.image$.subscribe((res) => {
      this.image = res;
    ///

    
    })
  }

}
