import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// Must import to use Forms functionality

import { Errors, UserService } from '@app/core';
import { ActivatedRoute, Router } from '@angular/router';

// Must import to use Forms functionality
import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
  FormControl,
  FormGroupDirective
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

export class PasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.invalid &&
      control.parent.hasError('notSame') &&
      control.parent.dirty
    );

    return invalidCtrl || invalidParent;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regiForm: FormGroup;
  FirstName = '';
  LastName = '';
  DOB: Date = null;
  Gender = '';
  Email = '';
  Password = '';
  IsAccepted = 0;
  Login = '';

  hidePassword = true;

  isSubmitting = false;
  errors = {};

  matcher = new PasswordErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // To initialize FormGroup
    this.regiForm = fb.group(
      {
        FirstName: [null, Validators.required],
        LastName: [null, Validators.required],
        DOB: [null, Validators.required],
        Gender: [null, Validators.required],
        Password: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(50)
          ])
        ],
        ConfirmPassword: [null],
        Email: [
          null,
          Validators.compose([Validators.required, Validators.email])
        ],
        IsAccepted: [null]
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const pass = group.controls.Password.value;
    const confirmPass = group.controls.ConfirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  // On Change event of Toggle Button
  onChange(event: any) {
    if (event.checked) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = { errors: {} };

    const { FirstName, LastName, DOB, Gender, Password, Email } = this.regiForm.value;
    const credentials = { FirstName, LastName, DOB, Gender, Password, Email };

    this.userService.attemptAuth('', credentials).subscribe(
      data => this.router.navigateByUrl('/'),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  // Executed When Form Is Submitted
  onFormSubmit(form: NgForm) {
    console.log(form);
    this.submitForm();
  }
}
