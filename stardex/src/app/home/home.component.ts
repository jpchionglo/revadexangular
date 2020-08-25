import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constellation: string;
  mapurl: string;

  constructor(private img: ImageService) { }

  ngOnInit(): void {

    this.constellation = 'something';
    this.mapurl = 'http://www.radicalcartography.net/stars4.png';

  }

}
