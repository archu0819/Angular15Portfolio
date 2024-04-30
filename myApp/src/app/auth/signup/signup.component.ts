
import { Component, OnInit } from '@angular/core';

import { NativeDateAdapter } from '@angular/material/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [NativeDateAdapter],

})
export class SignupComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private toaster: ToastrService) { }
  registerForm: any;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      // Define your form controls and their initial values
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      datePick: ['', Validators.required],

    });

  }



  onSubmit() {
    if (this.registerForm.valid) {
      // Submit form logic here
    } else 
    {
      // Display error toast notification
      this.toaster.error('Please fill in all required fields correctly.', 'Form Error');
    }
  }

}

