import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfService } from 'src/services/conf.service';
import { NavService } from 'src/services/nav.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public screenSize: string = '';
  public contactForm: UntypedFormGroup;
  
  constructor(
    public conf: ConfService,
    public nav: NavService,
    private _form: UntypedFormBuilder
    
  ) { 
    this.contactForm = this._form.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    }) 
    console.log(this.contactForm);
  }

}
