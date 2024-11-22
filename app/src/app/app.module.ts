import { NgModule } from '@angular/core';
import { 
  BrowserModule, 
  DomSanitizer, 
  HAMMER_GESTURE_CONFIG 
} from '@angular/platform-browser';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerConfig } from 'src/hammer';
import { MatIconRegistry } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app-material.module';
import { MetaService } from 'src/services/meta.service';
import { IconConfig, ImgConfig } from 'src/properties';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ConfService } from 'src/services/conf.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MaterialModule,
    NgxGoogleAnalyticsModule.forRoot(environment.google_analytics),
    NgxGoogleAnalyticsRouterModule,
    SharedModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _meta: MetaService,
    private _conf: ConfService
  ) {
    if(this._conf.iconConfig){
      this._conf.iconConfig.forEach((conf: IconConfig) => {
        this.addIconToRegistry(conf.name, conf.src);
      });
    }
    if(this._conf.assetConfig){
      this._conf.assetConfig.forEach((conf: ImgConfig) => {
        let img = new Image();
        img.src = conf.src;
        img.alt = conf.alt;
      });
    }
  }

  public addIconToRegistry(name: string, resourceUrl: string) {
    if (this._meta.isBrowser()) {
      this._matIconRegistry.addSvgIcon(
        name,
        this._domSanitizer.bypassSecurityTrustResourceUrl(resourceUrl)
      );
    } else {
      this._matIconRegistry.addSvgIconLiteral(
        name,
        this._domSanitizer.bypassSecurityTrustHtml('<svg></svg>')
      );
    }
  }
}
