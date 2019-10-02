import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });


  constructor() { }

  ngOnInit() {
    console.log(this.profileForm);
  }

  getErrorMessage() {
    return this.profileForm.controls.email.hasError('required') ? 'You must enter a value' :
      this.profileForm.controls.email.hasError('email') ? 'Invalid Email' : '';
  }

}
