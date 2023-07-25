import { Component, OnInit } from '@angular/core';
import { ImgConfig } from 'src/properties';
import { ConfService } from 'src/services/conf.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {

  public errorConf: ImgConfig | undefined;
  
  constructor(
    public _conf: ConfService
  ) {
    this.errorConf = this._conf.getImgConfig('404-img')
  }

  ngOnInit(): void {}
}
