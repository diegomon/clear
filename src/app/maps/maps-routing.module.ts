import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapHospitalsPageComponent} from './components/map-hospitals-page/map-hospitals-page.component';
import {MapsMenuPageComponent} from './components/maps-menu-page/maps-menu-page.component';
import {MapRiskPathsComponent} from './components/map-risk-paths/map-risk-paths.component';

const routes: Routes = [
  { path: 'maps', component: MapsMenuPageComponent },
  { path: 'maps/hospitals', component: MapHospitalsPageComponent },
  { path: 'maps/risk-paths', component: MapRiskPathsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
