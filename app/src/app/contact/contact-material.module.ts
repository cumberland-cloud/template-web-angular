import { NgModule } from '@angular/core';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class ContactMaterialModule {}
