import { Component, OnInit } from '@angular/core';
import { ConfService } from 'src/services/conf.service';
import { NavService } from 'src/services/nav.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(
    public conf: ConfService,
    public nav: NavService
  ) { }

  ngOnInit(): void {
  }

}
