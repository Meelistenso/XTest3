import { Component, OnInit, Input} from '@angular/core';

import { DtService } from '../shared/dt.service';
import { DtItem } from '../shared/dt-item';

@Component({
  selector: 'app-dynamic-template-loader',
  templateUrl: './dynamic-template-loader.component.html',
  styleUrls: ['./dynamic-template-loader.component.css']
})
export class DynamicTemplateLoaderComponent implements OnInit {
  dt: DtItem;

  @Input() template: string;

  constructor(private dtService: DtService) { }

  ngOnInit() {
    this.dt = {
      component: null,
      data: {
        template: this.template,
      },
    };
  }

}
