import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [ MatDividerModule, MatIconModule ],
  exports: [ MatDividerModule, MatIconModule ],
})
export class SharedMaterialModule {}
