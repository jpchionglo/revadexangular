import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Constellation } from '../models/constellation';
import { Planet } from '../models/planet';
import { AllconstellationsService } from '../services/allconstellations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedConstellation: string;
  constellations: Constellation[];
  planets: Planet[];
  mapurl: string;

  constructor(private img: ImageService, private allconst: AllconstellationsService) { }

  ngOnInit(): void {

    this.mapurl = "http://www.radicalcartography.net/stars4.png";
    this.constellations = this.allconst.getConstellations();

  }

}
