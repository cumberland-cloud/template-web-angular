import { Component } from '@angular/core';
import { ConfService } from 'src/services/conf.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.svg',
  styleUrls: ['./about.component.css'],
  imports: [ 
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  animations: [],
  standalone: true
})
export class AboutComponent {
  
  constructor(public conf: ConfService) { 

  }


}
