import { map, startWith } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConfig } from '@app/config/app.config';
import { LoggerService } from '@app/core/services/logger.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    LoggerService,
  ]
})

export class SearchBarComponent implements OnInit {
  search = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
