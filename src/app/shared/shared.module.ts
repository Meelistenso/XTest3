import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoverClassDirective } from './directives/hover-class.directive';
import { ListErrorsComponent } from './components/list-errors/list-errors.component';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ShowAuthedDirective } from './directives/show-authed.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TranslateModule } from '@ngx-translate/core';

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
    HoverClassDirective,
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
    HoverClassDirective,
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
