import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(
    private _router: Router
  ) { }

  public routeHome(){
    this._router.navigateByUrl('/')
  }
}
