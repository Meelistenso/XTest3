import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SelectedComponent } from './components/selected/selected.component';
import { DynamicTemplateLoaderComponent } from './dynamic-template-loader/dynamic-template-loader.component';

import { DtService } from './shared/dt.service';
import { DtDirective } from './shared/dt.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DtService],
  declarations: [DtDirective, DynamicTemplateComponent, QuoteComponent, SelectedComponent, DynamicTemplateLoaderComponent],
  entryComponents: [QuoteComponent],
  exports: [DynamicTemplateLoaderComponent],
})
export class DynamicTemplateModule { }
