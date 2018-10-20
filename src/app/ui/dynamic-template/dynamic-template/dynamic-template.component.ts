import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Input,
  ViewChild
} from '@angular/core';

import { DtComponent } from '../shared/dt.component';
import { DtDirective } from '../shared/dt.directive';
import { DtItem } from '../shared/dt-item';

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.css']
})
export class DynamicTemplateComponent implements OnInit {
  @Input() dt: DtItem;
  @ViewChild(DtDirective) appDtHost: DtDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.dt.component);

    const viewContainerRef = this.appDtHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<DtComponent>componentRef.instance).data = this.dt.data;
  }

}
