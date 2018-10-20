import { Component, OnInit, Input } from '@angular/core';

import { DtComponent } from '../../shared/dt.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
}
