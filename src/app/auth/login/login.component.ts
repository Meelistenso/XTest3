import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// Must import to use Forms functionality
import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm
} from '@angular/forms';

import { Errors, UserService, UserRole } from '@app/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  Password = '';
  Email = '';

  hidePassword = true;

  isSubmitting = false;
  errors = {};

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    // To initialize FormGroup
    this.authForm = fb.group({
      Password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50)
        ])
      ],
      Email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ]
    });
  }

  currentLang: string;

  ngOnInit() {
    this.currentLang = this.translateService.currentLang;
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;
    this.userService
    .attemptAuth('login', credentials)
    .subscribe(
      (data) => {
        switch (data.role) {
          case 0: this.router.navigate(['/student']); break;
          case 1: this.router.navigate(['/teacher']); break;
          case 2: this.router.navigate(['/admin']); break;
          default: break;
        }
      },
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

  // For dev purposes
  setUser(role: UserRole) {
    this.userService.setAuth({
      email: 'mail.gmail.com',
      token: '123123123123123',
      username: 'Meelistenso',
      bio: '- Ping! - Pong!',
      image: 'https://image.flaticon.com/icons/png/512/149/149071.png',
      role: role
    });
  }
}
