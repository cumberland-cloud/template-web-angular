import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutMaterialModule} from './about-material.module';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule,
    SharedModule,
    AboutMaterialModule
  ]
})
export class AboutModule { }
