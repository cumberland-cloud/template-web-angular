import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    MatIconModule,
    MatTooltipModule,
  ],
})
export class AboutMaterialModule {}
