import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { SubjectGridComponent } from './components/subject-grid/subject-grid.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    SubjectGridComponent,
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule { }
