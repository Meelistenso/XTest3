import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ListErrorsComponent } from './components/list-errors/list-errors.component';
import { ShowAuthedDirective } from './directives/show-authed.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TranslateModule } from '@ngx-translate/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    SpinnerComponent,
    ListErrorsComponent,
    ShowAuthedDirective,
    SearchBarComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SpinnerComponent,
    ListErrorsComponent,
    ShowAuthedDirective,
    SearchBarComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
