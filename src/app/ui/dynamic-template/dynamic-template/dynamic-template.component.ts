import {
  Compiler,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  ModuleWithComponentFactories,
  NgModule,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { DtComponent } from '../shared/dt.component';
import { DtDirective } from '../shared/dt.directive';
import { DtItem } from '../shared/dt-item';

// components for inner ngModule
import { QuoteComponent } from './components/quote/quote.component';
import { SelectedComponent } from './components/selected/selected.component';

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.css']
})
export class DynamicTemplateComponent implements OnInit {
  @Input() dt: DtItem;

  @ViewChild(DtDirective) appDtHost: DtDirective;

  private componentRef: ComponentRef<{}>;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
  ) { }

  compileTemplate() {
    const metadata = {
        selector: `runtime-component-sample`,
        template: this.dt.data.text
    };

    const factory = this.createComponentFactorySync(this.compiler, metadata, null);

    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }

  private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
    const cmpClass = componentClass || class RuntimeComponent { name: string = 'Denys'; };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({
      imports: [CommonModule],
      declarations: [
        decoratedCmp,
        QuoteComponent,
        SelectedComponent
      ]
    })
    class RuntimeComponentModule { }

    const module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
}

  ngOnInit() {
    // this.loadComponent();

    this.compileTemplate();
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
