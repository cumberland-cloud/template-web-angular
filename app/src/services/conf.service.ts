import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { APP_CONFIG } from 'src/app/app.config';
import { MOCK_DEPT_CONFIG } from 'src/app/mock';
import { Dept, Nav } from 'src/models';
import { NAV_CONFIG } from 'src/nav.config';
import { IconConfig, ImgConfig } from 'src/properties';
import { MetaService } from './meta.service';


@Injectable({
  providedIn: 'root'
})
export class ConfService {
  public title: string = APP_CONFIG.title;
  public description: string = APP_CONFIG.description;
  public longitude: number = APP_CONFIG.longitude;
  public latitude: number = APP_CONFIG.latitude;
  public assetConfig: ImgConfig[] | undefined = APP_CONFIG.assets;
  public iconConfig: IconConfig[] | undefined = APP_CONFIG.icons;
  public mapsUrl = APP_CONFIG.maps_url;

  // should navConfig be separate from appConfig???
  private navConfig: Nav[] = NAV_CONFIG;

  // TODO: populate with API Call
  private deptConfig: Dept[] = MOCK_DEPT_CONFIG;

  public screenSize: string = '';
  public currentRoute: string = '';
  public viewport: boolean = true;

  constructor(
    private _http: HttpClient,
    private _meta: MetaService,
    private _router: Router,
  ) { 
    this._meta.mediaBreakpoint.subscribe((size: string) => {
      this.screenSize = size;
    }); 
    this._router.events
    .pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe((event) => {
      if (this._meta.isBrowser()) {
        this.currentRoute = event.url;
        console.log('current route is')
        console.log(this.currentRoute);
      }
    });

  }

  public getImgConfig(id: string): ImgConfig | undefined{
    return this.assetConfig?.filter((conf:ImgConfig) => conf.id === id).pop();
  }

  public findNavByPath(path: string): Nav | undefined {
    return this.navConfig.filter((nav: Nav) => nav.path === path).pop();
  }

  public findDeptByTitle(title: string): Dept | undefined {
    return this.deptConfig.filter((dept: Dept)=> dept.title === title).pop();
  }

  public getMenuNavs(): Nav[]{
    return this.navConfig.filter((nav:Nav) => nav.menu);
  }

  public mobileMode(): boolean {
    return this.screenSize === 'xs';
  }
  
  public toggleViewport(): void {
    this.viewport = !this.viewport;
  }

  public activeRoute(path: string){
    return this.currentRoute === path;
  }
}
