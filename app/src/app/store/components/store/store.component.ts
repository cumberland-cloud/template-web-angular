import { Component } from '@angular/core';
import { ConfService } from 'src/services/conf.service';
import { NavService } from 'src/services/nav.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  constructor(
    public conf: ConfService,
    public nav: NavService,
  ) { }

}
