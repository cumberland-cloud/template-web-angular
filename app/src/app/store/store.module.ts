import { NgModule } from '@angular/core';

import {  StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './components/store/store.component';
import { StoreMaterialModule } from './store-material.module';
import { SharedModule } from '../shared/shared.module';
import { ClothingComponent } from './components/clothing/clothing.component';


@NgModule({
  declarations: [
    StoreComponent,
    ClothingComponent,
  ],
  imports: [
    StoreRoutingModule,
    StoreMaterialModule,
    SharedModule
  ]
})
export class StoreModule { }
