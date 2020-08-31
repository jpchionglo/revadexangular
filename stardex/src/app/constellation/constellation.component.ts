import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ImageUrlData } from '../data/Image_data.model';
import { Observable } from 'rxjs';
import { Constellation } from '../models/constellation';

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css']
})
export class ConstellationComponent implements OnInit {
  @Input() showMe: boolean;
  @Input() constellation: Constellation;

  name: string;
  image$: Observable<string>;
  image: string;
  should_open: boolean;
  buttonStyle: string;
  Styles: object;

  constructor(private img: ImageService) { 
  }

  ngOnInit(): void {
    ///Image
    this.name = this.constellation.Name;
    this.image$ = this.img.getImageUrl(this.name);
    this.image$.subscribe((res) => {
      this.image = res;
    })
    this.should_open = false;
    ///
    this.Styles = {
      'top': this.constellation.Top,
      'left': this.constellation.Left
    }
    this.buttonStyle = "top: " + this.constellation.Top + "px; left: " + this.constellation.Left + "px;";
    
  }

  toggleChild(): void {
    this.should_open = !this.should_open;
  }

}
