import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { DynamicTemplateLoaderComponent } from './dynamic-template-loader/dynamic-template-loader.component';

import { DtService } from './shared/dt.service';
import { DtDirective } from './shared/dt.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DtService],
  declarations: [DtDirective, DynamicTemplateComponent, DynamicTemplateLoaderComponent],
  exports: [DynamicTemplateLoaderComponent],
})
export class DynamicTemplateModule { }
