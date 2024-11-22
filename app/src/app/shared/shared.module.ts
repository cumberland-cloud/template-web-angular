import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { SharedMaterialModule } from './shared-material.module';
import { SafePipe } from './pipes/sanitize.pipe';
import { RouterModule } from '@angular/router';

@NgModule({ declarations: [
        ErrorComponent,
        SafePipe,
    ],
    exports: [
        ErrorComponent,
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedMaterialModule,
        SafePipe,
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedMaterialModule,
        RouterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {}
