import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ConstellationComponent } from '../constellation/constellation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constellation: string;
  mapurl: string;
  should_open: boolean;

  constructor(private img: ImageService) { }

  ngOnInit(): void {
    this.should_open = false;
    this.constellation = 'something';
    this.mapurl = 'http://www.radicalcartography.net/stars4.png';

  }

  toggleChild(): void {
    this.should_open = !this.should_open;
  }

}
