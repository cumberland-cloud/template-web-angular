import { 
  Component, 
  EventEmitter, 
  Output 
} from '@angular/core';
import { AnimationPeriods } from 'src/animations';
import { ConfService } from 'src/services/conf.service';


const TRANSITION_DURATION=AnimationPeriods.medium;
//const TRANSITION_DURATION=10;

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.svg',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent{

  @Output()
  public closed: EventEmitter<boolean> = new EventEmitter<boolean>();

  public closing: boolean = false;
  public screenSize: string = '';

  constructor(
    public conf: ConfService
  ) { } 

  public close(): void{
    this.closing = true;
    setTimeout(()=>{
      this.closed.emit(true);
    }, TRANSITION_DURATION * 1000)
  }
}
