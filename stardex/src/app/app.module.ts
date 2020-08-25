import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetComponent } from './planet/planet.component';
import { ConstellationComponent } from './constellation/constellation.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetComponent,
    ConstellationComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
