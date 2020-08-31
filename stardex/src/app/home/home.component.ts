import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Constellation } from '../models/constellation';
import { Planet } from '../models/planet';
import { AllconstellationsService } from '../services/allconstellations.service';
import { timer, Observable } from 'rxjs';
import { ConstellationComponent } from '../constellation/constellation.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedConstellation: string;
  constellations: Constellation[];
  obv$: Observable<string>;
  planets: Planet[];
  mapurl: string;
  display: string;
  display2: number;
  should_open: boolean;
  mapStyle: string;

  constructor(private img: ImageService, private allconst: AllconstellationsService) { }

  ngOnInit(): void {
    this.mapurl = "http://www.radicalcartography.net/stars4.png";
    this.obv$ = this.allconst.getConstellations();
    this.obv$.subscribe((res) => {

      this.display = res;
      this.constellations = <Constellation[]>JSON.parse(this.display);

    });

    this.mapStyle = "width: 100%; height: auto; position: relative;"
    
  }

  

}
