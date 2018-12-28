import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { SharedModule } from '@app/shared/shared.module';
import { DynamicTemplateModule } from '@app/ui/dynamic-template/dynamic-template.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DynamicTemplateModule
  ],
  declarations: [TestComponent],
  exports: [TestComponent],
})
export class TestModule { }
