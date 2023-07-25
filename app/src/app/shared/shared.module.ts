import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { SharedMaterialModule } from './shared-material.module';
import { SafePipe } from './pipes/sanitize.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ErrorComponent, 
    
    SafePipe, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    RouterModule,
  ],
  exports: [
    ErrorComponent,

    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedMaterialModule,

    SafePipe,
  ],
})
export class SharedModule {}
