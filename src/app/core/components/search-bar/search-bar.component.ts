import { map, startWith } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConfig } from '../../../config/app.config';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    LoggerService,
  ]
})

export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
