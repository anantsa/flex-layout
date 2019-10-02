import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent  {
  hide: true;
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    matDatePicker: new FormControl
  });

  // minDate = new Date();
  // maxDate = new Date(2019, 3, 15);

  getErrorMessage() {
    return this.profileForm.controls.email.hasError('required') ? 'You must enter a value' :
      this.profileForm.controls.email.hasError('email') ? 'Invalid Email' : '';
  }

}
