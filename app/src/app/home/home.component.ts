import { Component, ElementRef } from '@angular/core';
import { ConfService } from 'src/services/conf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.svg',
  styleUrls: [
    './home.component.css'
  ]
})
export class HomeComponent{
  constructor(
    private _el: ElementRef,
    public conf: ConfService,
  ){
  }

  ngOnDestroy(){
    this._el.nativeElement.remove();
  }

}
