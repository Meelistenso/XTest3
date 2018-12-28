import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './pages/teacher/teacher.component';
import { TeacherGroupsComponent } from './pages/teacher-groups/teacher-groups.component';
import { TeacherGroupComponent } from './pages/teacher-group/teacher-group.component';


const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: '',
        redirectTo: 'groups',
        pathMatch: 'full'
      },
      {
        path: 'groups',
        component: TeacherGroupsComponent
      },
      {
        path: 'groups/:id',
        component: TeacherGroupsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
