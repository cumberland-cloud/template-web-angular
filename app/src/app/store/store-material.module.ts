import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

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
export class StoreMaterialModule {}
