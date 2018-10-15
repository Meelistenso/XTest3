import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppConfig } from '../../../config/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {
  objectKeys = Object.keys;

  constructor(private router: Router) {
  }

  get routes() {
    return AppConfig.routes;
  }

  ngOnInit() {
  }

}
