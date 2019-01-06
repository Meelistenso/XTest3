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

import { DrawerComponent } from './ui';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    DrawerComponent,
    ListErrorsComponent,
    SearchBarComponent,
    ShowAuthedDirective,
    SpinnerComponent,
  ],
  exports: [
    CommonModule,
    DrawerComponent,
    FlexLayoutModule,
    FormsModule,
    ListErrorsComponent,
    MaterialModule,
    ReactiveFormsModule,
    SearchBarComponent,
    ShowAuthedDirective,
    SpinnerComponent,
    TranslateModule,
  ]
})
export class SharedModule { }
