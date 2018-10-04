import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  declarations: [
    SpinnerComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    SpinnerComponent
  ]
})

export class SharedModule {
}
