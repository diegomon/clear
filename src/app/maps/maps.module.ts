import { NgModule } from '@angular/core';
import {MapsRoutingModule} from './maps-routing.module';
import { MapHospitalsPageComponent } from './components/map-hospitals-page/map-hospitals-page.component';
import { MapsMenuPageComponent } from './components/maps-menu-page/maps-menu-page.component';
import { MapRiskPathsComponent } from './components/map-risk-paths/map-risk-paths.component';

@NgModule({
  declarations: [MapHospitalsPageComponent, MapsMenuPageComponent, MapRiskPathsComponent],
  imports: [
    MapsRoutingModule
  ]
})
export class MapsModule { }
