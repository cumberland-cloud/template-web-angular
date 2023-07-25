import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { ContactMaterialModule } from './contact-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactRoutingModule,
    ContactMaterialModule,
    SharedModule
  ]
})
export class ContactModule { }
