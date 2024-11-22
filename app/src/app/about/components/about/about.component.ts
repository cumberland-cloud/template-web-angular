import { Component } from '@angular/core';
import { ConfService } from 'src/services/conf.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.svg',
    styleUrls: ['./about.component.css'],
    animations: [],
    standalone: false
})
export class AboutComponent {
  
  constructor(public conf: ConfService) { 

  }


}
