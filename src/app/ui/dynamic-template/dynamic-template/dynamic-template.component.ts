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
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { DtComponent } from '../shared/dt.component';
import { DtDirective } from '../shared/dt.directive';
import { DtItem } from '../shared/dt-item';

import { DynamicTemplateComponentsModule } from './components/dynamic-template-components.module';

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.css']
})
export class DynamicTemplateComponent implements OnInit, OnDestroy {
  @Input() dt: DtItem;

  @ViewChild(DtDirective) appDtHost: DtDirective;

  private componentRef: ComponentRef<{}>;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
  ) { }

  private module: ModuleWithComponentFactories<any> = null;

  compileTemplate() {
    const metadata = {
        selector: `runtime-component-sample`,
        template: this.dt.data.template
    };

    const factory = this.createComponentFactorySync(this.compiler, metadata, null);

    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }

  private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
    const cmpClass = componentClass || class RuntimeComponent { name: string = 'Meelistenso'; };
    const decoratedCmp = Component(metadata)(cmpClass);

    if (!this.module) {
      @NgModule({
        imports: [CommonModule, DynamicTemplateComponentsModule],
        declarations: [
          decoratedCmp
        ]
      })
      class RuntimeComponentModule { }

      this.module = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    }

    return this.module.componentFactories.find(f => f.componentType === decoratedCmp);
}

  ngOnDestroy() {
    // if (this.componentRef) {
    //   this.componentRef.destroy();
    // }
  }

  ngOnInit() {
    // this.loadComponent();

    this.compileTemplate();
  }

  // loadComponent() {
  //   const componentFactory = this.componentFactoryResolver
  //     .resolveComponentFactory(this.dt.component);

  //   const viewContainerRef = this.appDtHost.viewContainerRef;
  //   viewContainerRef.clear();

  //   const componentRef = viewContainerRef.createComponent(componentFactory);
  //   (<DtComponent>componentRef.instance).data = this.dt.data;
  // }

}
