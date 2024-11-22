import { DOCUMENT } from '@angular/common';
import { 
  Component, 
  Inject, 
  Renderer2, 
} from '@angular/core';
import { 
  NavigationEnd, 
  Router 
} from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { filter } from 'rxjs/operators';
import { ConfService } from 'src/services/conf.service';
import { MetaService } from 'src/services/meta.service';
import { SeoService } from 'src/services/seo.service';

const SWITCH_DURATION=1;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [],
    standalone: false
})
export class AppComponent {

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _router: Router,
    private _renderer: Renderer2,
    private _seo: SeoService,
    private _meta: MetaService,
    private _ga: GoogleAnalyticsService,
    public conf: ConfService,
  ){
    this._router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (this._meta.isServer()) {
          // this.route = event.url TODO: need to set the route somehow.
          let conf = this.conf.findNavByPath(event.url);
          this._seo.setStaticAtrributes();
          this._seo.setJsonLd(this._renderer, conf?.data ? conf.data : {});
          this._seo.updateTitle(
            conf?.page_title ? conf.page_title : this.conf.title
          );
          this._seo.updateDescription(
            conf?.page_description
              ? conf.page_description
              : this.conf.description
          );
          this._seo.updateMetaAttributes(conf ? conf.meta : undefined);
        }
      });
    }
}
