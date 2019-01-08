import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XtestParagraphComponent } from './xtest-paragraph/xtest-paragraph.component';
import { XtestContainerComponent } from './xtest-container/xtest-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [XtestParagraphComponent, XtestContainerComponent],
  exports: [XtestParagraphComponent, XtestContainerComponent],
})
export class DynamicTemplateComponentsModule { }
