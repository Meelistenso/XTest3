import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './pages/student/student.component';
import { StudentLabsComponent } from './pages/student-labs/student-labs.component';
import { StudentLabComponent } from './pages/student-lab/student-lab.component';

import { AppConfig } from 'src/app/config/app.config';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
  },
  {
    path: AppConfig.routes.student.labs,
    component: StudentLabsComponent,
  },
  {
    path: AppConfig.routes.student.lab,
    component: StudentLabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
