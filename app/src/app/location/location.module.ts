import { NgModule } from '@angular/core';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './components/location/location.component';
import { SharedModule } from '../shared/shared.module';
import { LocationMaterialModule } from './location-material.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.google_maps
    }),
    LocationMaterialModule,
    LocationRoutingModule,
    SharedModule,
  ]
})
export class LocationModule { }
