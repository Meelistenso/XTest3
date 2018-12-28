import { Component, OnInit } from '@angular/core';

import { DtService } from '../shared/dt.service';
import { DtItem } from '../shared/dt-item';

@Component({
  selector: 'app-dynamic-template-loader',
  templateUrl: './dynamic-template-loader.component.html',
  styleUrls: ['./dynamic-template-loader.component.css']
})
export class DynamicTemplateLoaderComponent implements OnInit {
  dt: DtItem;

  constructor(private dtService: DtService) { }

  ngOnInit() {
    this.dt = {
      component: null,
      data: {
        name: 'akf.jakjfnskldjf <i>MEELISTENSO</i>',
        text: '<app-quote [data]="{name:\'my custon make\', text:\'my custom text\'}">РАКЕТА ПУШКА БОМБА<app-quote>',
      },
    };
  }

}
