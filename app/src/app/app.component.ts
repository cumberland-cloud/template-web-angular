import { DOCUMENT } from '@angular/common';
import { 
  Component, 
  ElementRef, 
  Inject, 
  Renderer2, 
  ViewChild 
} from '@angular/core';
import { 
  NavigationEnd, 
  Router 
} from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { filter } from 'rxjs/operators';

import { 
  AnimationControl, 
  Animations, 
  AnimationTriggers } from 'src/animations';
import { ConfService } from 'src/services/conf.service';
import { MetaService } from 'src/services/meta.service';
import { SeoService } from 'src/services/seo.service';
import { 
  angleBetween,
  arctan, 
  sequence, 
  unrevolve 
} from 'src/utilities';

const SWITCH_DURATION=1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.svg',
  styleUrls: [ './app.component.css' ],
  animations:[
    Animations.getManualRotateTrigger(
      -24,
      [
        0,   36,  72, 
        108, 144, 190, 
        226, 262, 298,
        334, 360,
      ]
    ),
  ]
})
export class AppComponent {
  @ViewChild('dial')
  public dial!: ElementRef;
  
  public angle: number = -24;
  public screenSize: string = '';
  public centerX!: number;
  public centerY!: number;
  public route: string = '';
  public pressed: boolean = false;
  public switched: boolean = false;
  public tuning: boolean= false;
  public tuned: boolean = false;
  public rotateCntl: AnimationControl = new AnimationControl(
    AnimationTriggers.cntl_rotate
  );

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
    .subscribe((event) => {
      if (this._meta.isServer()) {
        this.route = event.url
        let conf = this.conf.findNavByPath(this.route);
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
  
  private calculateCenter(): void {
    this.centerX = this.dial.nativeElement.getBoundingClientRect().x 
                      + this.dial.nativeElement.getBoundingClientRect().width/2;
    this.centerY = this.dial.nativeElement.getBoundingClientRect().y
                    + this.dial.nativeElement.getBoundingClientRect().height/2;
  }


  private calculateAngle(event: any){
    this.calculateCenter();
    let dx = event.clientX - this.centerX; 
    let dy = event.clientY - this.centerY;
    return arctan(dx, dy);
  }

  public rotate(event: any){
    this.angle = this.calculateAngle(event);
    
    for(let i: number = 0; i < 10; i++){
      let start = unrevolve(i * 36);
      let end = unrevolve((i + 1 ) * 36);

      if(angleBetween(this.angle, start, end)){
        let index = i - 6 > 0 ? i - 7 : i + 3;
        this.rotateCntl.position(index);
        if(i%2!==0){
          this.tuning = true;
          setTimeout(()=>{
            this.tuned = true;
            this.tuning = false;
          }, 1000)
          switch(i){
            case 1:
              this._router.navigateByUrl('/location');
              break;
            case 3: 
              this._router.navigateByUrl('/contact');
              break;
            case 5:
              this._router.navigateByUrl('/about');
              break;
            case 7:
              this._router.navigateByUrl('/');
              break;
            case 9:
              this._router.navigateByUrl('/store')
          }
        }
        else{
          this.tuned = false;
        }
      }
    }
  }

  public switch(on: boolean): void{
    if( (on && !this.switched) || (!on && this.switched) ){
      this.pressed = !this.pressed;
      setTimeout(()=>{
        this.switched = !this.switched;
        this.pressed = !this.pressed;
      }, SWITCH_DURATION*1000 - 1)
    }
  }

  public dialLabel(): string{
    let prefix : string = "Tune television station. "
    for(let i: number = 0; i < 10; i++){
      let start = unrevolve(i * 36);
      let end = unrevolve((i + 1 ) * 36);
      if(angleBetween(this.angle, start, end)){
        if(i%2!==0){
          switch(i){
            case 1:
              return prefix + 'Currently tuned to Location';
            case 3: 
              return prefix + 'Currently tuned to Contact';
            case 5:
              return prefix + 'Currently tuned to About'
            case 7:
              return prefix + 'Currently tuned to Home';
            case 9:
              return prefix + 'Currently tuned to Store';
          }
        }
        else return prefix + 'Not currently tuned.'
      }
    }
    return prefix + 'Not currently tuned.'
  }

  public routeToCumbercloud(): void{
    this._document.location.href = 'https://cumberland-cloud.com';

  }

  public toggleViewport(): void {
    this.conf.toggleViewport();
  }

  public sequence(number: number){
    return sequence(number)
  }
}
