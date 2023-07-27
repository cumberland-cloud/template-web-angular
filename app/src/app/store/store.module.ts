import { NgModule } from '@angular/core';

import {  StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './components/store/store.component';
import { StoreMaterialModule } from './store-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StoreComponent,
  ],
  imports: [
    StoreRoutingModule,
    StoreMaterialModule,
    SharedModule
  ]
})
export class StoreModule { }
