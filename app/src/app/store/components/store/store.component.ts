import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationPeriods } from 'src/animations';
import { Dept } from 'src/models';
import { ConfService } from 'src/services/conf.service';
import { NavService } from 'src/services/nav.service';

const INDICATE_DURATION=AnimationPeriods.short;

const TRANSITION_DURATION=AnimationPeriods.medium;

enum IndicatorStates{
  zero="zero",
  one="one",
  two="two",
  three="three",
  four="four",
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.svg',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  public selecting: boolean = false;
  public viewing: boolean = false;
  public selectedDept: Dept | undefined;
  public hoveredDept: Dept | undefined;
  public indicatorState: IndicatorStates = IndicatorStates.zero;
  public indicatorStates: any = IndicatorStates;

  constructor(
    public conf: ConfService,
    public nav: NavService,
  ) { }

  public selected(title: string | undefined = undefined){
    if(!title) return this.selectedDept !== undefined;
    if(!this.selectedDept) return false;
    return this.selectedDept.title === title;
  }

  public select(title: string){
    this.selectedDept = this.conf.findDeptByTitle(title);
    if(this.selectedDept){
      this.selecting = true;
      setTimeout(()=>{
        this.selecting = false;
        this.viewing = true;
      }, TRANSITION_DURATION * 1000);
    }
  }

  public deselect(){
    if(this.selectedDept){
      this.viewing = false;
      this.selectedDept = undefined;
    }
  }

  public hover(title: string): void{
    if(!this.hovering()){
      this.hoveredDept = this.conf.findDeptByTitle(title);
      this.indicate();
    }
  }

  public unhover(): void{
    this.hoveredDept = undefined;
    this.indicatorState = this.indicatorStates.zero;
  }

  public hovering(title: string | undefined = undefined): boolean {
    if(!title) return this.hoveredDept !== undefined;
    return this.hoveredDept ? this.hoveredDept.title === title : false;
  }

  public indicated(thisState: IndicatorStates): boolean {
    switch(this.indicatorState){
      case this.indicatorStates.zero:
        return thisState === this.indicatorStates.zero;
      case this.indicatorStates.one:
        return [
          this.indicatorStates.zero,
          this.indicatorStates.one, 
        ].includes(thisState)
      case this.indicatorStates.two:
        return [
          this.indicatorStates.zero,
          this.indicatorStates.one, 
          this.indicatorStates.two
        ].includes(thisState)
      case this.indicatorStates.three:
        return [
          this.indicatorStates.zero,
          this.indicatorStates.one, 
          this.indicatorStates.two,
          this.indicatorStates.three
        ].includes(thisState)
      case this.indicatorStates.four:
        return true;
    }
    return false;
  }

  public indicate(){
    if(this.hovering()){
      setTimeout(()=>{
        this.iterate();
        if(this.hovering()){
          this.indicate();       
        }
      }, INDICATE_DURATION * 1000)
    }
  }

  public activeStateArray() {
    return [
      this.indicatorStates.one, 
      this.indicatorStates.two,
      this.indicatorStates.three,
      this.indicatorStates.four
    ]
  }
  
  public iterate(): void{
    switch(this.indicatorState){
      case this.indicatorStates.zero:
        this.indicatorState = this.indicatorStates.one;
        break;
      case this.indicatorStates.one:
        this.indicatorState = this.indicatorStates.two;
        break;
      case this.indicatorStates.two:
        this.indicatorState = this.indicatorStates.three;
        break;
      case this.indicatorStates.three:
        this.indicatorState = this.indicatorStates.four;
        break;
      case this.indicatorStates.four:
        this.indicatorState = this.indicatorStates.zero;
        break;
    }
  }

}
