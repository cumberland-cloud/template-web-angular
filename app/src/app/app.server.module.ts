import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { 
  BrowserModule, 
  DomSanitizer 
} from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material.module';
import { MatIconRegistry } from '@angular/material/icon';
import { MetaService } from 'src/services/meta.service';
import { IconConfig } from 'src/properties';
import { ConfService } from 'src/services/conf.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NoopAnimationsModule,
    MaterialModule,
    ServerModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _meta: MetaService,
    private _conf: ConfService

  ) {
    if(this._conf.iconConfig){
      this._conf.iconConfig.forEach((conf: IconConfig) => {
        this.addIconToRegistry(conf.name, conf.src);
      });
    }
  }

  public addIconToRegistry(name: string, resourceUrl: string) {
    if (this._meta.isBrowser()) {
      this.matIconRegistry.addSvgIcon(
        name,
        this._sanitizer.bypassSecurityTrustResourceUrl(resourceUrl)
      );
    } else {
      this.matIconRegistry.addSvgIconLiteral(
        name,
        this._sanitizer.bypassSecurityTrustHtml('<svg></svg>')
      );
    }
  }
}