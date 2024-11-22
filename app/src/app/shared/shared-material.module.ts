import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDividerModule } from '@angular/material/divider';

import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

@NgModule({
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule],
  exports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule],
})
export class SharedMaterialModule {}
